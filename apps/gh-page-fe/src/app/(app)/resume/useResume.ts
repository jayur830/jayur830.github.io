import { useMemo } from 'react';
import { useQuery } from '@apollo/client';

import { ResumeQuery } from '@/graphql/graphql';
import getResume from '@/graphql/queries/getResume.gql';

export default function useResume() {
  const { data, loading } = useQuery<ResumeQuery>(getResume);

  const resumeData = useMemo(() => {
    if (!loading) {
      return data?.resume;
    }

    return null;
  }, [loading, data]);

  return { resumeData };
}
