'use client';

import Close from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import type { SnackbarProps } from '@mui/material/Snackbar';
import Snackbar from '@mui/material/Snackbar';
import type { PropsWithChildren } from 'react';
import type { SyntheticEvent } from 'react';
import { createContext, useCallback, useContext, useState } from 'react';

import nest from '@/utils/nest';

const snackbarPropsContext = createContext<SnackbarProps | null>(null);
const openAlertContext = createContext<(props: Omit<SnackbarProps, 'onClose'>) => void>(() => {});

function Provider({ children }: PropsWithChildren) {
  const [snackbarProps, setSnackbarProps] = useState<Omit<SnackbarProps, 'onClose'> | null>(null);

  const openAlert = useCallback((props: Omit<SnackbarProps, 'onClose'>) => {
    setSnackbarProps(props);
  }, []);

  const onClose = useCallback((event: Event | SyntheticEvent, reason?: string) => {
    if (reason !== 'clickaway') {
      setSnackbarProps((props) => ({ ...props, open: false }));
    }
  }, []);

  return (
    <snackbarPropsContext.Provider
      value={{
        ...snackbarProps,
        anchorOrigin: {
          vertical: snackbarProps?.anchorOrigin?.vertical ?? 'top',
          horizontal: snackbarProps?.anchorOrigin?.horizontal ?? 'center',
        },
        action: (
          <>
            {snackbarProps?.action}
            <IconButton color="inherit" onClick={onClose}>
              <Close />
            </IconButton>
          </>
        ),
        onClose,
      }}
    >
      <openAlertContext.Provider value={openAlert}>{children}</openAlertContext.Provider>
    </snackbarPropsContext.Provider>
  );
}

function Alert({ children }: PropsWithChildren) {
  const snackbarProps = useContext(snackbarPropsContext);
  return (
    <>
      {children}
      <Snackbar {...snackbarProps} />
    </>
  );
}

export default nest(Provider, Alert);

export function useAlert() {
  const openAlert = useContext(openAlertContext);
  return { openAlert };
}
