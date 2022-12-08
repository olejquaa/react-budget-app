import { useEffect, useState } from "react";

export const useDebounce = (initialValue = "") => {
    const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(initialValue);
      }, 700);
      return () => {
        clearTimeout(handler);
      };
    },
    [initialValue, 2000], 
  );
  return debouncedValue;
};
