// Import package modules
import { useMemo } from 'react';
import { useQuery } from '@apollo/client';

// Import global modules
import { ResumeQuery } from '@/graphql/graphql';
import getResume from '@/graphql/queries/getResume.gql';
import { createProvider } from '@/utils';

// Import local modules

function useResume() {
  const { data, loading } = useQuery<ResumeQuery>(getResume);

  const resumeData = useMemo(() => {
    if (!loading) {
      return data?.resume;
    }

    return null;
  }, [loading, data]);

  return { resumeData };
}

export const { Provider, useContext } = createProvider(useResume);
