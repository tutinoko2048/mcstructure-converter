import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from '../snackbar/Snackbar';
import theme from '../theme';

export function AppProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>{children}</SnackbarProvider>
    </ThemeProvider>
  );
}
