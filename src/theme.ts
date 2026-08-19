import { createTheme } from '@mui/material/styles';

export default createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: { main: '#8b9cff', light: '#b7c1ff', dark: '#6676dc', contrastText: '#101426' },
    secondary: { main: '#79d7c3' },
    background: { default: '#101217', paper: '#181b22' },
    text: { primary: '#edf0f7', secondary: '#a9b0c0' },
    divider: 'rgba(218, 225, 242, 0.12)',
  },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
    h4: { fontWeight: 700, letterSpacing: '-0.035em' },
    h6: { fontWeight: 650, letterSpacing: '-0.015em' },
    button: { fontWeight: 700, letterSpacing: '0.01em', textTransform: 'none' },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiCssBaseline: { styleOverrides: { body: { backgroundColor: '#101217' }, '::selection': { backgroundColor: 'rgba(139, 156, 255, 0.32)' } } },
    MuiAppBar: { styleOverrides: { root: { backgroundImage: 'none', backgroundColor: 'rgba(16, 18, 23, 0.86)', borderBottom: '1px solid rgba(218, 225, 242, 0.1)', backdropFilter: 'blur(14px)' } } },
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' }, outlined: { borderColor: 'rgba(218, 225, 242, 0.12)' } } },
    MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { fontWeight: 700 }, contained: { boxShadow: 'none' } } },
    MuiTextField: { defaultProps: { variant: 'outlined' }, styleOverrides: { root: { '& .MuiOutlinedInput-root': { backgroundColor: 'rgba(255, 255, 255, 0.025)' } } } },
    MuiDrawer: { styleOverrides: { paper: { backgroundImage: 'none', backgroundColor: '#151820' } } },
  },
});
