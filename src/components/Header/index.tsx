'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { DensityMedium } from '@mui/icons-material';
import { Box, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, styled } from '@mui/material';

import { NavigationItem } from '@/types/navigation';

export interface HeaderProps {
  navigations: NavigationItem[];
  extra: ReactNode;
}

export default function Header({ navigations, extra }: HeaderProps) {
  const [open, setOpen] = useState<boolean>(false);

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
        {extra}
      </Grid>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <List style={{ width: 200 }}>
          {navigations.map(({ label, path }, i) => (
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
