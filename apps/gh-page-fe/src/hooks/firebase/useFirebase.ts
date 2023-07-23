import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from '@/configs/firebase';

export default function useFirebase() {
  const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

  return {
    authService: getAuth(firebaseApp),
  };
}
