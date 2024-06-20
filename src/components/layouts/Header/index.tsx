'use client';

import { DensityMedium } from '@mui/icons-material';
import { Box, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

import { NavigationItem } from '@/types/navigation';

export interface HeaderProps {
  navigations: NavigationItem[];
  extra: ReactNode;
}

export default function Header({ navigations, extra }: HeaderProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Grid position="fixed" display="flex" justifyContent="space-between" alignItems="center" width="100%" height={60} zIndex={99} sx={(theme) => ({ backgroundColor: theme.palette.mode })}>
        {process.env.NODE_ENV === 'development' ? (
          <IconButton size="large" onClick={() => setOpen(true)}>
            <DensityMedium />
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
