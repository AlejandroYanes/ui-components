import { useEffect, useState } from 'react';
import { uniqueId } from 'helpers';

export function useUniqueIds(ids: string[], useHash = false) {
  const [uIDs, setUIDs] = useState([] as string[]);

  useEffect(() => {
    const nextUIDs = ids.map((id) => uniqueId(id, useHash));
    setUIDs(nextUIDs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ids);

  return uIDs;
}
