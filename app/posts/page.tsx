"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

function page() {
  const [search, setSearch] = useState<string>("");
  const [valueSearch, setValueSearch] = useState<string>("");
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleClick = () => {
    router.push(`/posts?search=${search}`);
  };

  const SearchInput = () => {
    const searchParam = useSearchParams();
    useEffect(() => {
      let search = searchParam.get("search");
      if (search) setValueSearch(search);
    }, [searchParam]);

    return (
      <>
        <input
          onChange={handleChange}
          value={search}
          className="border-solid border-2  border-gray-400 p-[10px]"
          type="text"
        />
        <button
          onClick={handleClick}
          className="bg-black text-white rounded-[5px] p-[5px]"
        >
          Tìm kiếm
        </button>
      </>
    );
  };
  return (
    <div>
      <SearchInput />
      <p>tìm kiếm:{valueSearch}</p>
    </div>
  );
}

export default dynamic(() => Promise.resolve(page), { ssr: false });
