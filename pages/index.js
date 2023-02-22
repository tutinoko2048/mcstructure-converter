import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import * as nbt from 'prismarine-nbt';
import * as snbt from 'nbt-ts';
import { Button, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Snackbar, Alert as MuiAlert } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IosShareIcon from '@mui/icons-material/IosShare';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import FormatIcon from '@mui/icons-material/FormatAlignLeftSharp';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Home() {
  const [ selection, setSelection ] = React.useState('structure');
  const [ notification, setNotification ] = React.useState({ open: false, message: '', severity: 'success' });
  
  const handleCopy = () => {
    const text = document.getElementById('preview').value;
    if (text) navigator.clipboard.writeText(text);
    setNotification({
      open: true,
      message: text ? 'Copied!' : 'There is nothing to copy!',
      severity: text ? 'info' : 'warning'
    });
  };
  
  const handleClose = (_, reason) => {
    if (reason !== 'clickaway') setNotification({ ...notification, open: false });
  };
  
  const handleSelect = (ev) => {
    setSelection(ev.target.value);
    updatePreview(ev.target.value);
  };
  
  const handleGenerate = () => {
    try {
      generateStructure(selection);
    } catch(e) {
      setNotification({ open: true, message: String(e), severity: 'error' });
    }
  }
  
  const loadStructure = async (data) => {
    const preview = document.getElementById('preview');
    try {
      const { parsed } = await nbt.parse(Buffer.from(data));
      preview.value = JSON.stringify(parsed, null, 2);
    } catch(e) {
      setNotification({ open: true, message: String(e), severity: 'error' });
    }
  }
  
  const loadText = (data) => {
    document.getElementById('preview').value = data;
  }
  
  const updatePreview = () => {
    const input = document.getElementById('input');
    const reader = new FileReader();
    if (!input.files[0]) return;
    if (selection === 'structure') {
      reader.addEventListener('load', () => loadStructure(reader.result));
      reader.readAsArrayBuffer(input.files[0]);
    } else if (selection === 'json' || selection === 'snbt') {
      reader.addEventListener('load', () => loadText(reader.result));
      reader.readAsText(input.files[0]);
    } else {
      setNotification({ open: true, message: `Received unexpected type: ${selection}`, severity: 'error' });
    }
  }
  
  const formatPreview = () => {
    const preview = document.getElementById('preview');
    if (selection === 'structure' || selection === 'json') {
      try {
        preview.value = JSON.stringify(JSON.parse(preview.value), null, 2);
        setNotification({ open: true, message: 'Formatted!', severity: 'success' })
      } catch {
        setNotification({ open: true, message: 'ParseError: failed to parse JSON in preview', severity: 'error' });
      }
    }
  }
    
  return (
    <>
      <Head>
        <title>mcstructure converter</title>
        <meta name="description" content="Converts .mcstructure file into JSON that you can easily edit." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1 className={styles.title}>mcstructure converter</h1>
      
      <div className={styles.label}>Select file</div><br/>  
      <fieldset className={styles.fieldset}>
        <FormControl>
          <FormLabel>Type</FormLabel>
          <RadioGroup defaultValue="structure" value={selection} onChange={handleSelect} id="select" row>
            <FormControlLabel value="structure" control={<Radio/>} label="structure"/>
            <FormControlLabel value="json" control={<Radio/>} label="JSON" />
            {
              //<FormControlLabel value="snbt" control={<Radio/>} label="SNBT" />
            }
          </RadioGroup>
        </FormControl>
        
        <Button variant="contained"  component="label" startIcon={<FileOpenIcon/>}>
          Select
          <input type="file" id="input" onChange={updatePreview} hidden/>
        </Button>
      </fieldset><br/>
      
      <div className={styles.label}>Preview</div><br />
      <textarea id="preview" className={styles.textarea}></textarea><br/>
      <Button variant="contained" onClick={handleCopy} startIcon={<ContentCopyIcon/>}>
        Copy
      </Button>
      <Button variant="contained" onClick={formatPreview} style={{ marginLeft: "0.5rem" }} startIcon={<FormatIcon/>}>
        Format
      </Button>
      <div id="info"></div>
      
      <br/>
      <fieldset className={styles.fieldset} id="result">
        <div className={styles.form}>
          <TextField
            id="fileName"
            defaultValue="generated.mcstructure"
            label="File name"
            variant="outlined"
            size="small"
          />
          <br/>
          <Button variant="contained" onClick={handleGenerate} startIcon={<IosShareIcon/>} style={{ marginTop: "0.5rem"}}>
            Generate
          </Button>
        </div>
      </fieldset><br/>
      <br/>
      <a href="https://github.com/tutinoko2048/mcstructure-converter">Github</a>
      
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={notification.open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={notification.severity} sx={{ width: '100%' }}>{notification.message ?? ''}</Alert>
      </Snackbar>
      </main>
    </>
  )
}



function generateStructure(selection) {
  const data = document.getElementById('preview').value;
  if (!data) throw Error('Please put valid JSON');
  let structure;
  
  if (selection === 'snbt') structure = snbt.encode(null, snbt.parse(data));
  else structure = nbt.writeUncompressed(JSON.parse(data), 'little');
  
  const blob = new Blob([ structure ]);
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = document.getElementById('fileName').value;
  a.click();
}

function formatSNBT() {
  const preview = document.getElementById('preview');
  const info = document.getElementById('info');
  try {
    preview.value = snbt.stringify(snbt.parse(preview.value), { pretty: true });
  } catch(e) {
    info.innerHTML = String(e);
    setTimeout(() => info.innerHTML = '', 3*1000);
  }
}