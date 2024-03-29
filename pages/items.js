import React from 'react';
import Head from 'next/head';
import Header from './Header';
import * as nbt from 'prismarine-nbt';
import { createItem, createEnchant, EnchantmentTypes, writeStructure } from '../src/nbt';
import template from '../src/chest_structure.json';
import { Divider, List, IconButton, Button, TextField as MuiTextField, Typography, Switch, Select, MenuItem } from '@mui/material';
import { Accordion, AccordionSummary } from '../src/components/Accordion';
import { useSnackbar } from '../src/snackbar/Snackbar';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@mui/icons-material/Close";

const MAX_COUNT = 27;

const styles = {
  viewer: { paddingLeft: '1.2em' },
  item: {
    bgcolor: 'background.paper',
    width: '40em',
    maxWidth: '95%'
  },
  itemTitle: {
    display: 'table-cell',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    fontSize: '1.1em'
  },
  right: { flexGrow: 1 },
  select: { minWidth: '30%',  marginRight: '0.5em' },
  grid: { margin: 'auto'},
  'export': { textTransform: 'none', marginTop: '0.8em' }
}

const TextField = (props) => (
  <MuiTextField variant="outlined" size="small" {...props} sx={{ width: '18em', maxWidth: '95%'}} />
);

const NumberField = (props) => {
  const handleChange = (e) => {
    if (e.target.value === '') return props.onChange(null);
    if (isNaN(e.target.value)) {
      props.onChange(null)
    } else {
      props.onChange(Number(e.target.value));
    }
    
  }
  return <TextField {...props} onChange={handleChange} inputProps={{
    inputMode: "numeric",
    pattern: "[0-9]*"
  }}/>
}

const PreviewLabel = ({ value }) => (
  <span style={{ flexDirection: 'column' }}>{value}</span>
)

export default function ItemGenerator() {
  const { block_entity_data } = template.value.structure.value.palette.value.default.value.block_position_data.value[0].value;
  const itemList = block_entity_data.value.Items.value;
  
  const { showSnackbar } = useSnackbar();
  const [ expand, setExpand ] = React.useState(false);
  const [ items, setItems ] = React.useState([ createItem('minecraft:diamond') ]);
  
  const updateList = () => itemList.value = items;
  
  const addItem = () => {
    if (items.length >= MAX_COUNT) return showSnackbar(`The max size of container is ${MAX_COUNT}`, 'error');
    const newList = [...items, createItem()];
    setItems(newList);
    
    setExpand(newList.length - 1);
  }
  
  const handleExpand = (i) => {
    if (expand === i) return setExpand(false);
    setExpand(i);
  }
  
  const deleteItem = (e, index) => {
    e.stopPropagation();
    items.splice(index, 1);
    setItems([...items]);
  }
  
  const changeValue = (value, id, index) => {
    if (id === 'id') items[index].Name.value = value;
    if (id === 'name') items[index].tag.value.display.value.Name = value ? nbt.string(value) : undefined;
    if (id === 'unbreakable') items[index].tag.value.Unbreakable = value ? nbt.byte(value) : undefined;
    
    setItems([...items]);
  }
  
  const changeLore = (lores, i) => {
    items[i].tag.value.display.value.Lore = lores.length ? nbt.list(nbt.string(lores)) : undefined;
    setItems([...items]);
  }
  
  const changeEnchant = (enchants, i) => {
    items[i].tag.value.ench = enchants.length ? nbt.list(nbt.comp(enchants)) : undefined;
    setItems([...items]);
  }
  
  React.useEffect(() => {
    setItems(items.map((item, i) => {
      item.Slot.value = i;
      return item;
    }));
  }, [ items.length ])
  
  const createPanel = () => {
    return items.map((item, i) => {
      const itemId = item.Name.value;
      const itemName = item.tag.value.display.value.Name?.value ?? '';
      const itemLore = item.tag.value.display.value.Lore?.value?.value ?? [];
      const itemEnchant = item.tag.value.ench?.value?.value ?? [];
      const isUnbreakable = item.tag.value.Unbreakable?.value;
      
      return (
        <Accordion key={i} sx={styles.item} expanded={expand === i} onChange={() => handleExpand(i)}>
          <AccordionSummary>
            <div style={{ display: 'table', paddingLeft: '0.4em' }}>
              <Typography style={styles.itemTitle}>{itemId || '-'}</Typography>
            </div>
            <br/>
            <div style={styles.right}/>
            <IconButton size="small" onClick={(e) => deleteItem(e, i)}><CloseIcon/></IconButton>
          </AccordionSummary>
          <div style={{ margin: '0.8em'}}>
          
          {/* TODO: 幅揃える https://webcreatetips.com/coding/3499/ */}
            <PreviewLabel value="Identifier:"/>
            <TextField value={itemId} style={{ marginLeft: '1em' }}
              onChange={(e) => changeValue(e.target.value, 'id', i)}
            /><br/>
            
            <PreviewLabel value="Name:"/>
            <TextField value={itemName} style={{ marginLeft: '1em' }}
              onChange={(e) => changeValue(e.target.value, 'name', i)}
            /><br/>
            
            <PreviewLabel value="Lore:"/>
            <IconButton onClick={() => {
              itemLore.push('');
              changeLore(itemLore, i);
            }}><AddIcon/></IconButton><br/>
            
            {...itemLore.map((lore, loreIndex) => (
              <div key={loreIndex} style={{ marginBottom: '0.5em' }}>
                <div style={{ display: 'flex' }}>
                  <TextField multiline style={{ marginLeft: '1em', width: '25em' }} value={lore} onChange={(e) => {
                    itemLore[loreIndex] = e.target.value;
                    changeLore(itemLore, i);
                  }}/>
                  <IconButton onClick={() => {
                    itemLore.splice(loreIndex, 1);
                    changeLore(itemLore, i);
                  }}>
                    <CloseIcon/>
                  </IconButton>
                </div>
              </div>
            ))}

            {/* eslint-disable-next-line */}
            <PreviewLabel value="Enchantments:"/>
            <IconButton onClick={() => {
              itemEnchant.push(createEnchant());
              changeEnchant(itemEnchant, i);
            }}><AddIcon/></IconButton>
            
            {...itemEnchant.map((enchant, enchIndex) => (
              <div key={enchIndex} style={{ marginLeft: '1em', marginBottom: '0.5em' }}>
                <div>
                  ID: {enchant.id.value ?? '-'}, Level: {enchant.lvl.value ?? '-'}
                </div>
                <div style={{ display: 'flex' }}>
                  <Select value={enchant.id.value} style={styles.select} size="small" MenuProps={{ style: { height: '50%' }}} onChange={(e) => {
                    enchant.id.value = Number(e.target.value);
                    changeEnchant(itemEnchant, i);
                  }}>
                    {...Object.keys(EnchantmentTypes).map(enchId => (
                      <MenuItem key={enchId} value={enchId}>{EnchantmentTypes[enchId]}</MenuItem>
                    ))}
                  </Select>
                  <NumberField value={enchant.lvl.value} style={{ width: '6em' }} onChange={(value) => {
                    enchant.lvl.value = value;
                    changeEnchant(itemEnchant, i);
                  }}/>
                  <IconButton onClick={() => {
                    itemEnchant.splice(enchIndex, 1);
                    changeEnchant(itemEnchant, i);
                  }}>
                    <CloseIcon/>
                  </IconButton>
                </div>
              </div>
            ))}
            <br/>
            
            {/* eslint-disable-next-line */}
            <PreviewLabel value="Unbreakable"/>
            <Switch value={isUnbreakable}
              onChange={(e) => changeValue(e.target.checked ? 1 : 0, 'unbreakable', i)}
            />
            
          </div>
        </Accordion>
      )
    })
  }
  
  return (
    <>
    <Head>
      <title>Item Generator</title>
      <meta name="description" content="Generates customized item with mcstructure" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header name="Item Generator" pageId="items" />
    
    <main style={{ marginLeft: '1em' }}>
      
      Items ({items.length}/{MAX_COUNT})<br/>
      <List >
        {...createPanel()}
      </List>
      
      <Button startIcon={<AddIcon/>} variant="contained" onClick={addItem}
        sx={{ float: 'right', marginRight: '1em' }}
      >
        Add item
      </Button><br/>
      <br/>
      <Divider/>
      <br/>
      Name:<br/>
      <TextField id="fileName" defaultValue="export"/><br/>
      
      <Button style={styles.export} variant="contained" size="small" onClick={() => {
        updateList();
        exportStructure(JSON.parse(JSON.stringify(template))); // delete undefined
      }}>Export as structure</Button><br/>

      <Button style={styles.export} variant="contained" size="small" onClick={() => {
        updateList();
        exportJson(template);
      }}>Export as JSON</Button><br/>
        
      <br/>
      <Divider/>
      
      <br/>
      <h4>Debug view</h4>
      
      <div id="debug"></div>
      {generateTree(items)}
      <br/>
      <a href="https://github.com/tutinoko2048/mcstructure-converter">Github</a>
      <br/>
    </main>
    </>
  )
}

function exportStructure(data) {
  try {
    const fileName = document.getElementById('fileName');
    const a = document.createElement('a');
    a.href = writeStructure(data);
    a.download = `${fileName.value}.mcstructure`;
    a.click();
  } catch (e) {
    alert(String(e));
  }
}

function exportJson(data) {
  const fileName = document.getElementById('fileName');
  const blob = new Blob([ JSON.stringify(data, null, 2) ]);
  const a = document.createElement('a');
  a.href = window.URL.createObjectURL(blob);
  a.download = `${fileName.value}.json`;
  a.click();
}

function generateTree(obj) {
  return (
    <ul style={styles.viewer}>
      {...Object.keys(obj).map(k => {
        if (isObject(obj[k])) return <li key={k} >{k}: {generateTree(obj[k])}</li>
        return <li
          key={k}
          style={obj[k] === undefined ? { color: 'darkgray' } : null}>
            {k}: {typeView(obj[k])}
          </li>
      })}
    </ul>
  )
}

function typeView(value) {
  return typeof value === 'string' ? `"${value}"` : String(value);
}

function isObject(item) {
  return item && typeof item === 'object';
}