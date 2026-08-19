import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { AlertColor } from '@mui/material';
import { GlobalSnackbar } from './GlobalSnackbar';

type SnackbarContextValue = { showSnackbar: (message: string, severity?: AlertColor) => void };
const SnackbarContext = createContext<SnackbarContextValue>({ showSnackbar: () => undefined });

export function SnackbarProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<AlertColor>('info');
  const showSnackbar = useCallback((nextMessage: string, nextSeverity: AlertColor = 'info') => {
    setMessage(nextMessage);
    setSeverity(nextSeverity);
  }, []);
  const value = useMemo(() => ({ showSnackbar }), [showSnackbar]);

  return <SnackbarContext.Provider value={value}>
    {children}
    <GlobalSnackbar open={Boolean(message)} message={message} severity={severity} onClose={() => setMessage('')} />
  </SnackbarContext.Provider>;
}

export function useSnackbar() {
  return useContext(SnackbarContext);
}
