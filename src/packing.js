import JSZip from 'jszip';

export function preparePack(data, packName) {
  const zip = new JSZip();
  zip.file('manifest.json');
}