import React from 'react';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const menuStyle = {
  width: '18rem',
  fontSize: '1.2rem',
  backgroundColor: '#fff'
}

const currentPageStyle = {
  backgroundColor: '#ccc'
}

const pages = [
  { href: './', title: 'mcstructure converter', id: 'converter' },
  { href: './enchants', title: 'Enchantments Generator', id: 'enchants', disabled: true }
];

function Menu({ onClose, pageId }) {
  return (
    <>
      <IconButton size="large" edge="start" onClick={onClose} aria-label="close"
        style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CloseIcon/>
      </IconButton>
      <div style={{ paddingTop: '1rem', paddingLeft: '1rem', fontSize: '1.8rem', fontWeight: 'bold' }}>Apps</div>
      <nav className="menu">
        <ul>
          {/* eslint-disable-next-line */}
          {...pages.map(p => <li style={pageId === p.id ? currentPageStyle : null}><Link href={p.href}>{p.title}</Link></li>)}
        </ul>
      </nav>
    </>
  )
}

export default function Header({ name, pageId }) {
  const [ menuOpened, setMenuOpened ] = React.useState(false);
  
  const handleClick = () => setMenuOpened(!menuOpened);
  
  return (
    <header>
      <Box sx={{ flexGrow: 1, marginBottom: '0.8rem' }}>
        <AppBar position="static" style={{ backgroundColor: '#2a2a2a'}}>
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu"
              sx={{ mr: 2 }} onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {name}
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Drawer anchor={'left'} open={menuOpened} onClose={handleClick}
          PaperProps={{ style: menuStyle }} >
          <Menu onClose={handleClick} pageId={pageId}/>
        </Drawer>
      </Box>
    </header>
  );
}