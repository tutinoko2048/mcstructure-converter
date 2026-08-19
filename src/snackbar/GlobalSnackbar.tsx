import { forwardRef } from 'react';
import { Alert, Snackbar } from '@mui/material';
import type { AlertColor, AlertProps } from '@mui/material';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} sx={{ width: '100%' }} />;
});

export function GlobalSnackbar({ open, message, severity, onClose }: {
  open: boolean; message: string; severity: AlertColor; onClose: () => void;
}) {
  return <Snackbar open={open} onClose={onClose} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
    <SnackbarAlert severity={severity}>{message}</SnackbarAlert>
  </Snackbar>;
}
