import { useCallback, useState } from 'react';

export function useSimplePagination(total: number, initialPage = 0) {
  const [page, setPage] = useState(initialPage);

  const goNext = useCallback(() => setPage(old => {
    const nextPage = old + 1;
    return nextPage === total ? 0 : nextPage;
  }), [total]);

  const goBack = useCallback(() => setPage(old => {
    const prevPage = old - 1;
    return prevPage < 0 ? total - 1 : prevPage;

  }), [total]);

  return { page, setPage, goNext, goBack };
}
