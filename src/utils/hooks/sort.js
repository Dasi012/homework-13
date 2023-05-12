import { useState } from "react";

export const useSortDate = (date) => {
  const [sortDate, setSortDate] = useState([]);

  function sort(option) {
    if (option === "ASC") {
      const sortDate = date.sort((a, b) => {
        return a.price - b.price;
      });
      setSortDate(sortDate);
    } else if (option === "DESC") {
      const sortDate = date.sort((a, b) => {
        return b.price - a.price;
      });
      setSortDate(sortDate);
    } else {
      return 0;
    }
  }
  return {
    sortDate,
    sort,
  };
};
