import ResumeClient from './page.client';
import ResumeServer from './page.server';

export default function Resume() {
  return <ResumeServer>{ResumeClient}</ResumeServer>;
}
