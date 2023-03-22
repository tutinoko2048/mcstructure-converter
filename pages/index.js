import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as nbt from 'prismarine-nbt';
import { useDropzone } from 'react-dropzone';
import { useSnackbar } from '../src/snackbar/Snackbar';
import Header from './Header';
import { writeStructure } from '../src/nbt';

import { Button, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IosShareIcon from '@mui/icons-material/IosShare';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import FormatIcon from '@mui/icons-material/FormatAlignLeftSharp';
import DeleteIcon from '@mui/icons-material/Delete';

const borderNormalStyle = {};
const borderDragStyle = {
  border: "1px solid #00f",
  transition: 'border .2s ease-in-out'
};

export default function Home() {
  const [ selection, setSelection ] = React.useState('structure');
  const [ fileName, setFileName ] = React.useState('generated.mcstructure');
  const [ isError, setError ] = React.useState(false);
  const { showSnackbar } = useSnackbar();
  
  const handleCopy = () => {
    const text = document.getElementById('preview').value;
    if (text) navigator.clipboard.writeText(text);
    showSnackbar(
      text ? 'Copied!' : 'There is nothing to copy!',
      text ? 'info' : 'warning'
    );
  };
  
  const handleSelect = (ev) => setSelection(ev.target.value);
  
  const handleGenerate = () => {
    try {
      generateStructure(selection);
    } catch(e) {
      showSnackbar(String(e), 'error');
    }
  }
  
  const loadSuccess = (fileName) => {
    showSnackbar(`Successfully loaded ${fileName}`, 'success');
    setFileName(fileName);
  }
  
  const loadStructure = async (data, fileName) => {
    const preview = document.getElementById('preview');
    try {
      const { parsed } = await nbt.parse(Buffer.from(data));
      preview.value = JSON.stringify(parsed, null, 2);
      setError(false);
      loadSuccess(fileName);
    } catch(e) {
      preview.value = '';
      setError(true);
      showSnackbar(String(e), 'error');
    }
  }
  
  const loadText = (data, fileName) => {
    document.getElementById('preview').value = data;
    setError(false);
    loadSuccess(fileName);
  }
  
  const updatePreview = (file) => {
    const reader = new FileReader();
    if (!file) return;
    
    if (selection === 'structure') {
      reader.addEventListener('load', () => loadStructure(reader.result, file.name));
      reader.readAsArrayBuffer(file);
      
    } else if (selection === 'json') {
      reader.addEventListener('load', () => loadText(reader.result, file.name));
      reader.readAsText(file);
      
    } else {
      showSnackbar(`Received unexpected type: ${selection}`, 'error');
    }
  }
  
  const formatPreview = () => {
    const preview = document.getElementById('preview');
    if (selection === 'structure' || selection === 'json') {
      try {
        preview.value = JSON.stringify(JSON.parse(preview.value), null, 2);
        showSnackbar('Formatted!', 'success');
      } catch {
        showSnackbar('ParseError: failed to parse JSON in preview', 'error');
      }
    }
  }
  
  const { getRootProps, getInputProps, isDragActive, acceptedFiles, open } = useDropzone({
    multiple: false,
    noClick: true
  });
  
  // eslint-disable-next-line
  React.useEffect(() => updatePreview(acceptedFiles[0]), [acceptedFiles, selection]);
  
  const dropZoneStyle = React.useMemo(() => (
    { ...(isDragActive ? borderDragStyle : borderNormalStyle) }
  ), [isDragActive]);
  
  const TypeSelector = React.memo(function Selector() {
    return (
      <FormControl>
        <FormLabel>Type</FormLabel>
        <RadioGroup defaultValue="structure" value={selection} onChange={handleSelect} id="select" row>
          <FormControlLabel value="structure" control={<Radio/>} label="structure"/>
          <FormControlLabel value="json" control={<Radio/>} label="JSON" />
        </RadioGroup>
      </FormControl>
    )
  }, [selection]);
  
  const FileNameEdit = () => (
    <TextField id="fileName" label="File name" variant="outlined" size="small" value={fileName} />
  );
  
  const GenerateButton = () => (
    <Button variant="contained" onClick={handleGenerate} startIcon={<IosShareIcon/>} style={{ marginTop: '0.5rem'}}>
      Generate
    </Button>
  );
  
  return (
    <>
      <Head>
        <title>mcstructure converter</title>
        <meta name="description" content="Converts .mcstructure file into JSON that you can easily edit." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      
      <Header name="mcstructure converter" pageId="converter"/>
      
      <main className={styles.main}>

      <div className={styles.label}>Select file</div><br/>  
      <fieldset className={styles.fieldset} {...getRootProps({ style: dropZoneStyle })} >
        <div >
          { isDragActive ? <p>Drop the files here ...</p> : <TypeSelector /> }
          <input {...getInputProps()} />
          <Button variant="contained" component="label" startIcon={<FileOpenIcon/>} onClick={open}>
            Select
          </Button>
        </div>
      </fieldset><br/>

      <div className={styles.label}>Preview</div><br/>
      <textarea id="preview" className={`${styles.textarea} ${isError ? styles.error : ''}`}></textarea><br/>
      <Button variant="contained" onClick={handleCopy} startIcon={<ContentCopyIcon/>}>
        Copy
      </Button>
      <Button variant="contained" onClick={formatPreview} style={{ marginLeft: '0.5rem' }} startIcon={<FormatIcon/>}>
        Format
      </Button>
      <Button variant="contained" onClick={clearPreview} style={{ float: 'right' }} color="inherit" startIcon={<DeleteIcon/>}>
        Clear
      </Button>
      <br/>
      <br/>
      <fieldset className={styles.fieldset} id="result">
        <div className={styles.form}>
          <FileNameEdit/><br/>
          <GenerateButton/>
        </div>
      </fieldset><br/>
      <br/>
      <a href="https://github.com/tutinoko2048/mcstructure-converter">Github</a>
      
      </main>
    </>
  )
}

function clearPreview() {
  document.getElementById('preview').value = '';
}

function generateStructure(selection) {
  const data = document.getElementById('preview').value;
  if (!data) throw Error('Please put valid JSON');
  const url = writeStructure(data, selection);
  const a = document.createElement('a');
  a.href = url;
  a.download = document.getElementById('fileName').value;
  a.click();
}