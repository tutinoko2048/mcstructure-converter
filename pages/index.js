import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as nbt from 'prismarine-nbt';
import { Button, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IosShareIcon from '@mui/icons-material/IosShare';
import FileOpenIcon from '@mui/icons-material/FileOpen';

function onChange() {
  const isStructure = document.getElementById('mcstructure').checked;
  const input = document.getElementById('input');
  const reader = new FileReader();
  if (!input.files[0]) return;
  if (isStructure) {
    reader.addEventListener('load', () => loadStructure(reader));
    reader.readAsArrayBuffer(input.files[0]);
  } else {
    reader.addEventListener('load', () => loadJson(reader));
    reader.readAsText(input.files[0]);
  }
}

async function loadStructure(reader) {
  const preview = document.getElementById('preview');
  let value;
  try {
    const { parsed } = await nbt.parse(Buffer.from(reader.result));
    value = JSON.stringify(parsed, null, 2);
  } catch(e) {
    value = String(e);
  }
  preview.value = value;
}

function loadJson(reader) {
  document.getElementById('preview').value = reader.result;
}

function generateStructure() {
  const data = document.getElementById('preview').value;
  const errorPanel = document.getElementById('error');
  errorPanel.innerHTML = '';
  if (!data) return errorPanel.innerHTML = `Error: Please put valid JSON`;
  let structure;
  try {
    structure = nbt.writeUncompressed(JSON.parse(data), 'little');
  } catch(e) {
    errorPanel.innerHTML = String(e);
    return;
  }
  const blob = new Blob([ structure ]);
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = document.getElementById('fileName').value;
  a.click();
}

function copy() {
  const text = document.getElementById('preview').value;
  if (!text) return alert('There is nothing to copy in Preview!');
  navigator.clipboard.writeText(text);
  const copied = document.getElementById('copied')
  copied.innerHTML = 'copied!';
  setTimeout(() => copied.innerHTML = '', 3*1000);
}

export default function Home() {
  return (
    <>
      <Head>
        <title>mcstructure converter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        
      </Head>
      <main className={styles.main}>
      <h1 className={styles.title}>mcstructure converter</h1>
      
      <div className={styles.label}>Select file</div><br/>  
      <fieldset className={styles.fieldset}>
        <FormControl>
          <FormLabel>Type</FormLabel>
          <RadioGroup defaultValue="mcstructure" onChange={onChange} id="select" row>
            <FormControlLabel value="mcstructure" control={<Radio id="mcstructure"/>} label="mcstructure"/>
            <FormControlLabel value="json" control={<Radio id="json"/>} label="JSON" />
          </RadioGroup>
        </FormControl>
        
        <Button variant="contained"  component="label" startIcon={<FileOpenIcon/>}>
          Select
          <input type="file" id="input" onChange={onChange} hidden/>
        </Button>
      </fieldset><br/>
      
      <div className={styles.label}>Preview</div><br />
      <textarea id="preview" className={styles.textarea}></textarea><br/>
      <Button variant="contained" onClick={copy} startIcon={<ContentCopyIcon/>}>
        Copy
      </Button><div id="copied"></div>
      
      <br/>
      <div id="error"></div>
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
          <Button variant="contained" onClick={generateStructure} startIcon={<IosShareIcon/>} style={{ marginTop: "0.5rem"}}>
            Generate
          </Button>
        </div>
      </fieldset><br/>
      <br/>
      <a href="https://github.com/tutinoko2048/mcstructure-converter">Github</a>
      </main>
    </>
  )
}