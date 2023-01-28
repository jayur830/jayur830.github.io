// import package modules
import { useState } from 'react';
import Link from 'next/link';
import { DensityMedium } from '@mui/icons-material';
import { Box, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, styled, Switch } from '@mui/material';

import { values } from '@/configs';
import { useContext } from '@/contexts/Provider';

// Import global modules

// Import local modules

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const setDarkMode = useContext((value) => value.setDarkMode);

  return (
    <>
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {process.env.NODE_ENV === 'development' ? (
          <IconButton
            size="large"
            onClick={() => setOpen(true)}
          >
            <DensityMedium />
          </IconButton>
        ) : (
          <Box height={48} />
        )}
        <AntSwitch onChange={(_, checked) => setDarkMode(checked)} />
      </Grid>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <List style={{ width: 200 }}>
          {values.navigations.map(({ label, path }, i) => (
            <ListItem key={i}>
              <MenuLink href={path}>
                <ListItemButton>
                  <ListItemText>{label}</ListItemText>
                </ListItemButton>
              </MenuLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

const MenuLink = styled(Link)({
  textDecoration: 'none',
  width: '100%',
  color: 'unset',
});

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 48,
  height: 'fit-content',
  border: `2px solid ${theme.palette.mode === 'dark' ? 'white' : 'black'}`,
  borderRadius: 999,
  marginRight: 10,
  padding: 0,
  transition: 'all 0.3s ease',
  ['&&& .MuiSwitch-track']: {
    backgroundColor: 'transparent',
    height: 24,
    borderRadius: 999,
  },
  ['.MuiSwitch-switchBase']: {
    top: 2,
    left: 2,
    padding: 0,
    ['.MuiSwitch-thumb']: {
      backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
      boxShadow: 'none',
      transition: 'all 0.3s ease',
    },
    ['&.Mui-checked']: {
      transform: 'translateX(20px)',
    },
  },
}));
