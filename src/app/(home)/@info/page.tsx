'use client';

import { useInView } from 'react-intersection-observer';

import data from '@/assets/data/ko.json';

import SocialLinks, { SocialLinkType } from './_components/SocialLinks';
import SubTitle from './_components/SubTitle';
import Title from './_components/Title';

export default function Info() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="flex flex-col justify-center items-center gap-8 h-screen px-4 pb-8 pt-25 lg:px-8 lg:pt-[132px] lg:pb-16" id="info" ref={ref}>
      {inView && (
        <>
          <div className="flex flex-col items-center gap-2">
            <Title className="text-5xl font-bold text-center" text={data.title} />
            <SubTitle className="text-2xl font-thin text-center" text={data.subTitle} />
          </div>
          <SocialLinks
            items={data.socialLinks as {
              type: SocialLinkType;
              href: string;
            }[]}
          />
        </>
      )}
    </div>
  );
}
