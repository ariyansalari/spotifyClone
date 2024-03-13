"use client";
import qs from "query-string";
import { useDebounce } from "@/hooks";
import { useEffect, useState } from "react";
import { InputText } from "..";
import { useRouter } from "next/navigation";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 500);
  useEffect(() => {
    const query = {
      title: debouncedValue,
    };
    const url = qs.stringifyUrl({
      url: "search",
      query: query,
    });
    router.push(url);
  }, [debouncedValue, router]);

  return (
    <InputText
      value={value}
      placeholder="what do you want to listen ?"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
