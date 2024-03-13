"use client";
import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay || 500);
    return () => {
      clearInterval(timer);
    };
  }, [value, delay]);

  return debounceValue;
};
