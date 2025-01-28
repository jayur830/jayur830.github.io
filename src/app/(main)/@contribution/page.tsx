import { Grid, Stack, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const data = [
  {
    category: 'Open Source',
    list: [
      {
        title: 'Re-Rendering을 막는 React Context API 라이브러리',
        description: `  - Github: [https://github.com/jayur830/react-constate](https://github.com/jayur830/react-constate)
- NPM: [https://www.npmjs.com/package/react-constate](https://www.npmjs.com/package/react-constate)`,
      },
    ],
  },
  {
    category: 'Bug Report',
    list: [
      {
        title: 'iOS에서 `expo-datadog` Expo Config Plugin 추가한 후 빌드 시 에러 발생',
        description: `  - Issue: [https://github.com/DataDog/expo-datadog/issues/31](https://github.com/DataDog/expo-datadog/issues/31)
- PR: [https://github.com/DataDog/datadog-ci/pull/1246](https://github.com/DataDog/datadog-ci/pull/1246)`,
      },
    ],
  },
];

export default function Contribution() {
  return (
    <Grid container justifyContent="center" height="calc(100vh - 60px)">
      <Grid container direction="column" justifyContent="center" alignItems="center" maxWidth={1440} paddingX={3}>
        <Typography variant="h1" fontSize={{ xs: 32, md: 48 }} marginBottom={5}>
          Contribution
        </Typography>
        <Stack maxWidth={800}>
          {data.map(({ category, list }, i) => (
            <Grid key={i}>
              <Typography>{category}</Typography>
              {list.map(({ title, description }, j) => (
                <ReactMarkdown key={j} className="markdown">
                  {`- ${title}\n${description}`}
                </ReactMarkdown>
              ))}
            </Grid>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}
