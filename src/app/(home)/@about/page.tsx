import SocialLinks from './_components/SocialLinks';
import SubTitle from './_components/SubTitle';
import Title from './_components/Title';

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 h-screen" id="about">
        <div className="flex flex-col items-center gap-2">
          <Title className="text-5xl font-bold" text="안녕하세요!" />
          <SubTitle className="text-2xl font-thin" text="꿈과 희망이 가득한 개발자 이재열입니다." />
        </div>
        <SocialLinks
          items={[
            {
              type: 'github',
              href: 'https://github.com/jayur830',
            },
            {
              type: 'linkedin',
              href: 'https://www.linkedin.com/in/%EC%9E%AC%EC%97%B4-%EC%9D%B4-2a1295223/',
            },
            {
              type: 'email',
              href: 'mailto:jayur830@naver.com',
            },
          ]}
        />
      </div>
    </>
  );
}
