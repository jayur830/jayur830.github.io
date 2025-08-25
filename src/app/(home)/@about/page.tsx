import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <div className="flex flex-col gap-4 w-full" id="about">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">안녕하세요, 프론트엔드 개발자 이재열입니다.</CardTitle>
          <CardTitle className="text-base font-medium text-zinc-500">dddd</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
