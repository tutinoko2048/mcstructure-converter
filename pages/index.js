import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as nbt from 'prismarine-nbt';
import * as snbt from 'nbt-ts';
import { useDropzone } from 'react-dropzone';

import { Button, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Snackbar, Alert as MuiAlert } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IosShareIcon from '@mui/icons-material/IosShare';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import FormatIcon from '@mui/icons-material/FormatAlignLeftSharp';
import DeleteIcon from '@mui/icons-material/Delete';


const NotifyAlert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const initialAlert = { open: false, message: '', severity: 'success' };

export default function Home() {
  const [ selection, setSelection ] = React.useState('structure');
  const [ alert, setAlert ] = React.useState(initialAlert);
  const [ fileName, setFileName ] = React.useState('generated.mcstructure');
  const [ isError, setError ] = React.useState(false);
  
  const handleCopy = () => {
    const text = document.getElementById('preview').value;
    if (text) navigator.clipboard.writeText(text);
    setAlert({
      open: true,
      message: text ? 'Copied!' : 'There is nothing to copy!',
      severity: text ? 'info' : 'warning'
    });
  };
  
  const handleClose = (_, reason) => {
    if (reason !== 'clickaway') setAlert({ ...alert, open: false });
  };
  
  const handleSelect = (ev) => setSelection(ev.target.value);
  
  const handleGenerate = () => {
    try {
      generateStructure(selection);
    } catch(e) {
      setAlert({ open: true, message: String(e), severity: 'error' });
    }
  }
  
  const loadSuccess = (fileName) => {
    setAlert({ open: true, message: `Successfully loaded ${fileName}`, severity: 'success' });
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
      setAlert({ open: true, message: String(e), severity: 'error' });
    }
  }
  
  const loadText = (data, fileName) => {
    document.getElementById('preview').value = data;
    loadSuccess(fileName);
  }
  
  const updatePreview = (file) => {
    const reader = new FileReader();
    if (!file) return;
    
    if (selection === 'structure') {
      reader.addEventListener('load', () => loadStructure(reader.result, file.name));
      reader.readAsArrayBuffer(file);
      
    } else if (selection === 'json' || selection === 'snbt') {
      reader.addEventListener('load', () => loadText(reader.result, file.name));
      reader.readAsText(file);
      
    } else {
      setAlert({ open: true, message: `Received unexpected type: ${selection}`, severity: 'error' });
    }
  }
  
  const formatPreview = () => {
    const preview = document.getElementById('preview');
    if (selection === 'structure' || selection === 'json') {
      try {
        preview.value = JSON.stringify(JSON.parse(preview.value), null, 2);
        setAlert({ open: true, message: 'Formatted!', severity: 'success' })
      } catch {
        setAlert({ open: true, message: 'ParseError: failed to parse JSON in preview', severity: 'error' });
      }
    }
  }
  
  const { getRootProps, getInputProps, isDragActive, acceptedFiles, open } = useDropzone({
    multiple: false,
    noClick: true
  });
  
  React.useEffect(() => {
    updatePreview(acceptedFiles[0]);
  }, [ acceptedFiles, selection ]);
  
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
      </Head>
      <main className={styles.main}>
      <h1 className={styles.title}>mcstructure converter</h1>

      <div className={styles.label}>Select file</div><br/>  
      <fieldset className={styles.fieldset}>
        <div {...getRootProps()}>
          { isDragActive ? <p>Drop the files here ...</p> : <TypeSelector /> }
          <input {...getInputProps()} />
          <Button variant="contained" component="label" startIcon={<FileOpenIcon/>} onClick={open}>
            Select
          </Button>
        </div>
      </fieldset><br/>

      <div className={styles.label}>Preview</div><br/>
      <textarea id="preview" className={`${styles.textarea} ${isError ? 'error' : ''}`}></textarea><br/>
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
      
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={alert.open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <NotifyAlert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>{alert.message ?? ''}</NotifyAlert>
      </Snackbar>
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