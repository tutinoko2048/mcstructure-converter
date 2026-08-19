import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@tanstack/react-router';

const pages = [
  { href: '/', title: 'mcstructure converter', id: 'converter' },
  { href: '/items', title: 'Item Generator', id: 'items' },
];

export function Header({ name, pageId }: { name: string; pageId: string }) {
  return <Box sx={{ mb: 8 }} component="header">
    <AppBar position="fixed" elevation={0}>
      <Toolbar sx={{ maxWidth: 1000, width: '100%', minHeight: 60, mx: 'auto', px: { xs: 2, sm: 3 }, gap: { xs: 1, sm: 2 } }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: { xs: '0.9rem', sm: '1rem' }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</Typography>
        <Box component="nav" aria-label="Main navigation" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {pages.map((page) => {
            const selected = page.id === pageId;
            return <Box
              key={page.id}
              component={Link}
              href={page.href}
              aria-current={selected ? 'page' : undefined}
              sx={{
                px: { xs: 1, sm: 1.25 }, py: 0.75, borderRadius: 1,
                color: selected ? 'text.primary' : 'text.secondary',
                bgcolor: selected ? 'rgba(139, 156, 255, 0.14)' : 'transparent',
                fontSize: { xs: '0.78rem', sm: '0.875rem' }, fontWeight: selected ? 700 : 600,
                textDecoration: 'none', whiteSpace: 'nowrap',
                '&:hover': { color: 'text.primary', bgcolor: 'rgba(255, 255, 255, 0.06)' },
              }}
            >{page.title}</Box>;
          })}
        </Box>
      </Toolbar>
    </AppBar>
  </Box>;
}
