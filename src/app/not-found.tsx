import Image from 'next/image';
import Link from 'next/link';

import Jayur830Img from '@/assets/images/jayur830.png';
import Header from '@/components/service/Header';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <>
      <Header
        sideMenuItems={[
          {
            label: '이력서',
            href: '/resume',
          },
          {
            label: '블로그',
            href: '/blog',
          },
        ]}
        title="</>"
      />
      <div className="flex flex-col justify-center items-center gap-2 w-full h-[calc(100vh-58px)]">
        <div className="flex items-center gap-1">
          <h1 className="text-[108px] font-extrabold">4</h1>
          <Image alt="404" className="relative top-[-10px]" height={108} src={Jayur830Img} width={108} />
          <h1 className="text-[108px] font-extrabold">4</h1>
        </div>
        <Link href="/" passHref>
          <Button>돌아가기</Button>
        </Link>
      </div>
    </>
  );
}
