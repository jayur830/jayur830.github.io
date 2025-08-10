'use client';

import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';

import type { NavigationItem } from '@/types/navigation';

export interface HeaderProps {
  navigations: NavigationItem[];
  extra?: ReactNode;
}

export default function Header({ navigations, extra }: HeaderProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Grid
        position="fixed"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        height={60}
        zIndex={99}
        sx={(theme) => ({ backgroundColor: theme.palette.mode === 'dark' ? '#121212' : 'common.white' })}
      >
        {process.env.NODE_ENV === 'development' ? (
          <IconButton size="large" onClick={() => setOpen(true)}>
            <DensityMediumIcon />
          </IconButton>
        ) : (
          <Box height={48} />
        )}
        {extra}
      </Grid>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List style={{ width: 200 }}>
          {navigations.map(({ label, path }, i) => (
            <ListItem
              key={i}
              sx={{
                'a.menu': {
                  textDecoration: 'none',
                  width: '100%',
                  color: 'unset',
                },
              }}
            >
              <Link className="menu" href={path}>
                <ListItemButton>
                  <ListItemText>{label}</ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
