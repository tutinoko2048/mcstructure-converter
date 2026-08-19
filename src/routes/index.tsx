import { createFileRoute } from '@tanstack/react-router';

import { useCallback, useMemo, useState } from 'react';
import { Buffer } from 'buffer';
import * as nbt from 'prismarine-nbt';
import { useDropzone } from 'react-dropzone';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Paper, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import FormatAlignLeftSharpIcon from '@mui/icons-material/FormatAlignLeftSharp';
import IosShareIcon from '@mui/icons-material/IosShare';
import { Header } from '../components/Header';
import { writeStructure } from '../nbt';
import { useSnackbar } from '../snackbar/Snackbar';

export const Route = createFileRoute("/")({
  component: Converter,
});

type InputKind = 'structure' | 'json';

function Converter() {
  const [inputKind, setInputKind] = useState<InputKind>('structure');
  const [fileName, setFileName] = useState('generated.mcstructure');
  const [preview, setPreview] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLevelDatMode, setIsLevelDatMode] = useState(false);
  const { showSnackbar } = useSnackbar();

  const loadFile = useCallback(async (file: File) => {
    try {
      if (inputKind === 'json') {
        setPreview(await file.text());
        setIsLevelDatMode(false);
      } else {
        const { parsed } = await nbt.parse(Buffer.from(await file.arrayBuffer()));
        setPreview(JSON.stringify(parsed, null, 2));
        setIsLevelDatMode(file.name === 'level.dat' || file.name === 'level.dat_old');
      }
      setFileName(file.name);
      setIsError(false);
      showSnackbar(`Successfully loaded ${file.name}`, 'success');
    } catch (error) {
      setPreview('');
      setIsError(true);
      showSnackbar(String(error), 'error');
    }
  }, [inputKind, showSnackbar]);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    multiple: false, noClick: true, onDropAccepted: ([file]) => { if (file) void loadFile(file); },
  });

  const formatPreview = () => {
    try {
      setPreview(JSON.stringify(JSON.parse(preview), null, 2));
      setIsError(false);
      showSnackbar('Formatted!', 'success');
    } catch {
      setIsError(true);
      showSnackbar('ParseError: failed to parse JSON in preview', 'error');
    }
  };
  const copyPreview = async () => {
    if (!preview) return showSnackbar('There is nothing to copy!', 'warning');
    await navigator.clipboard.writeText(preview);
    showSnackbar('Copied!', 'info');
  };
  const generate = () => {
    try {
      if (!preview) throw new Error('Please put valid JSON');
      const url = writeStructure(JSON.parse(preview), isLevelDatMode);
      const anchor = document.createElement('a');
      anchor.href = url; anchor.download = fileName || 'generated.mcstructure'; anchor.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 0);
    } catch (error) { showSnackbar(String(error), 'error'); }
  };
  const dropStyle = useMemo(() => ({ borderColor: isDragActive ? 'primary.main' : 'divider', bgcolor: isDragActive ? 'action.hover' : 'transparent' }), [isDragActive]);

  return <>
    <Header name="mcstructure converter" pageId="converter" />
    <Box component="main" sx={{ px: { xs: 2, sm: 3 }, pb: 5, maxWidth: 1000, mx: 'auto' }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>Structure converter</Typography>
      </Box>
      <Paper component="section" variant="outlined" sx={{ p: { xs: 2, sm: 3 }, mb: 3 }}>
        <Typography variant="h6" gutterBottom>1. Select a file</Typography>
        <FormLabel>Input type</FormLabel>
        <RadioGroup row value={inputKind} onChange={(event) => setInputKind(event.target.value as InputKind)}>
          <FormControlLabel value="structure" control={<Radio />} label="structure" />
          <FormControlLabel value="json" control={<Radio />} label="JSON" />
        </RadioGroup>
        <FormGroup><FormControlLabel control={<Checkbox size="small" checked={isLevelDatMode} onChange={(event) => setIsLevelDatMode(event.target.checked)} />} label="level.dat mode" /></FormGroup>
        <Box {...getRootProps()} sx={{ mt: 1, p: 2.5, border: 1, borderStyle: 'dashed', borderRadius: 2, transition: 'all .15s ease', ...dropStyle }}>
          <input {...getInputProps()} />
          <Button variant="contained" startIcon={<FileOpenIcon />} onClick={open}>Select file</Button>
          <Box component="span" sx={{ ml: 2, color: 'text.secondary' }}>{isDragActive ? 'Drop the file here' : 'or drag and drop it here'}</Box>
        </Box>
      </Paper>
      <Paper component="section" variant="outlined" sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography variant="h6" gutterBottom>2. Review and edit</Typography>
        <FormLabel htmlFor="preview">JSON preview</FormLabel>
        <TextField id="preview" multiline minRows={16} fullWidth value={preview} error={isError} onChange={(event) => { setPreview(event.target.value); setIsError(false); }} slotProps={{ htmlInput: { spellCheck: false, style: { fontFamily: 'ui-monospace, monospace' } } }} sx={{ mt: 1 }} />
        <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 1, flexWrap: 'wrap' }}>
          <Button variant="contained" onClick={() => void copyPreview()} startIcon={<ContentCopyIcon />}>Copy</Button>
          <Button variant="contained" onClick={formatPreview} startIcon={<FormatAlignLeftSharpIcon />}>Format</Button>
          <Button color="inherit" onClick={() => { setPreview(''); setIsError(false); }} startIcon={<DeleteIcon />}>Clear</Button>
        </Stack>
      </Paper>
      <Paper component="section" variant="outlined" sx={{ p: { xs: 2, sm: 3 }, mt: 3 }}>
        <Typography variant="h6" gutterBottom>3. Download</Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ alignItems: { sm: 'center' } }}>
        <TextField label="File name" size="small" value={fileName} onChange={(event) => setFileName(event.target.value)} />
        <Button variant="contained" onClick={generate} startIcon={<IosShareIcon />}>Generate</Button>
      </Stack>
      </Paper>
      <Box component="footer" sx={{ mt: 4, textAlign: 'center', color: 'text.secondary', fontSize: 14 }}><a href="https://github.com/tutinoko2048/mcstructure-converter">GitHub</a></Box>
    </Box>
  </>;
}
