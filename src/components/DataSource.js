import { useMemo } from 'react';

function useDataSource(data) {
  const dataSource = useMemo(() => {
    return {
      getData: async () => {
        return data;
      }
    };
  }, [data]);

  return dataSource;
}

export default useDataSource;
