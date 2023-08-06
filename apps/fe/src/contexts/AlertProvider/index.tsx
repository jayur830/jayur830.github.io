'use client';

import { PropsWithChildren, SyntheticEvent, useCallback, useState } from 'react';
import { createProvider } from 'react-constate';
import { Close } from '@mui/icons-material';
import { IconButton, Snackbar, SnackbarProps } from '@mui/material';
import { pick } from 'lodash';

import { nest } from '@/utils';

function useAlertContext() {
  const [snackbarProps, setSnackbarProps] = useState<Omit<SnackbarProps, 'onClose'> | null>(null);

  const openAlert = useCallback((props: Omit<SnackbarProps, 'onClose'>) => {
    setSnackbarProps(props);
  }, []);

  const onClose = useCallback((event: SyntheticEvent, reason?: string) => {
    if (reason !== 'clickaway') {
      setSnackbarProps((props) => ({ ...props, open: false }));
    }
  }, []);

  return {
    snackbarProps: {
      ...snackbarProps,
      anchorOrigin: {
        vertical: snackbarProps?.anchorOrigin?.vertical ?? 'top',
        horizontal: snackbarProps?.anchorOrigin?.horizontal ?? 'center',
      },
      action: (
        <>
          {snackbarProps?.action}
          <IconButton
            color="inherit"
            onClick={onClose}
          >
            <Close />
          </IconButton>
        </>
      ),
      onClose,
    },
    openAlert,
  };
}

const { Provider, useContext } = createProvider(useAlertContext);

function Alert({ children }: PropsWithChildren) {
  const snackbarProps = useContext('snackbarProps');
  return (
    <>
      {children}
      <Snackbar {...snackbarProps} />
    </>
  );
}

export default nest(Provider, Alert);

export function useAlert() {
  return pick(useContext(), 'openAlert');
}
