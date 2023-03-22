import React from 'react';
import Head from 'next/head';
import Header from './Header';
import * as nbt from 'prismarine-nbt';
import { createItem } from '../src/nbt'
import template from '../src/chest_structure.json';
import { Divider, List, IconButton, Button, TextField as MuiTextField, Box, Typography } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '../src/components/Accordion';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@mui/icons-material/Close";

const TextField = (props) => (
  <MuiTextField variant="outlined" size="small" {...props} sx={{ marginLeft: '1em', width: '18em', maxWidth: '100%'}}
  />
)

const styles = {
  viewer: {
    paddingLeft: '1.2em'
  },
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
  right: {
    flexGrow: 1
  }
}

const PreviewLabel = ({ value }) => (
  <span style={{ flexDirection: 'column' }}>
    {value}
  </span>
)

export default function ItemGenerator() {
  const { block_entity_data } = template.value.structure.value.palette.value.default.value.block_position_data.value[0].value;
  const itemList = block_entity_data.value.Items.value;
  
  const [ expand, setExpand ] = React.useState(false);
  const [ items, setItems ] = React.useState([ createItem('minecraft:diamond') ]);
  
  const updateList = () => itemList.value = items;
  
  const addItem = () => {
    const newList = [...items, createItem()];
    setItems(newList);
    
    setExpand(newList.length - 1);
  }
  
  const handleExpand = (i) => {
    if (expand === i) return setExpand(false);
    setExpand(i);
  }
  
  const deleteItem = (e, index) => {
    alert(index)
    e.stopPropagation();
    items.splice(index, 1);
    setItems([...items]);
  }
  
  const changeValue = (value, id, index) => {
    if (id === 'id') items[index].Name.value = value;
    if (id === 'name') items[index].tag.value.display.value.Name.value = value;
    if (id === 'lore') {}
    
    setItems([...items]);
    const p = document.createElement('p');
    p.innerHTML = `[${index}] ${id}: ${value}`;
    document.getElementById('debug').appendChild(p);
  }
  
  
  const createPanel = () => {
    return items.map((item, i) => {
      const itemId = item.Name.value;
      const itemName = item.tag.value.display.value.Name.value;
      const itemLore = item.tag.value.display.value.Lore.value.value;
      
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
            <PreviewLabel value="Identifier:"/>
            <TextField value={itemId} onChange={(e) => changeValue(e.target.value, 'id', i)} /><br/>
            <PreviewLabel value="Name:"/>
            <TextField value={itemName} onChange={(e) => changeValue(e.target.value, 'name', i)} /><br/>
            <PreviewLabel value="Lore:"/>
            <TextField id="lore" /><br/>
            <PreviewLabel value="Enchantments:"/><br/>
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
      Under development...<br/>
      <br/>
      
      Items<br/>
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
      <div id="debug"/>
      
      <h4>Debug view</h4>
      {generateTree(items)}
      
    </main>
    </>
  )
}

function generateTree(obj) {
  return (
    <ul style={styles.viewer}>
      {...Object.keys(obj).map(k => {
        if (isObject(obj[k])) return <li key={k} >{k}: {generateTree(obj[k])}</li>
        return <li key={k}>{k}: {String(obj[k])}</li>
      })}
    </ul>
  )
}

function isObject(item) {
  return typeof item === 'object';
}