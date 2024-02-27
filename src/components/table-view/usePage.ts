import { useState } from "react";

export const usePage = () => {
  const [page, setPage] = useState(1);

  const next = () => {
    setPage(page + 1);
  };

  const prev = () => {
    setPage(page - 1);
  };

  return { page, next, prev };
};
