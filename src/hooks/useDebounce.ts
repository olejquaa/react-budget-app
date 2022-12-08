import { useEffect, useState } from "react";

export const useDebounce = (initialValue = "", delay=2000) => {
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(initialValue);
    }, 700);
    return () => {
      clearTimeout(handler);
    };
  }, [initialValue, delay]);
  return debouncedValue;
};
