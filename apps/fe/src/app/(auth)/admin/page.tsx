'use client';

import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import useFirebase from '@/hooks/firebase/useFirebase';

export default function Admin() {
  const { authService } = useFirebase();
  const router = useRouter();

  /**
   * @description 로그인 상태 체크
   * user?.getIdToken()이 만료되어도 user는 살아있음
   */
  useLayoutEffect(() => {
    onAuthStateChanged(getAuth(), async (user) => {
      // 로그아웃 상태
      if (!user) {
        router.replace('/login');
      } else {
        // 로그인 상태
        /** @todo implement */
        console.log(await user.getIdToken());
      }
    });
  }, [router]);

  return (
    <button
      onClick={async () => {
        await signOut(authService);
        router.push('/login');
      }}
    >
      sign out
    </button>
  );
}
