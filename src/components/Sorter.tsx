import { useSearchParams } from "react-router-dom";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown";
import { useState } from "react";

export default function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [sortyValue, setSortValue] = useState("none");

  const handleSelectChange = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("sort", value);
    newSearchParams.set("page", "1");
    setSortValue(value);
    setSearchParams(newSearchParams, { replace: true });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="border-[1px] border-yellow-100 glowing-yellow-border"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <img src="/icons/sort.svg" alt="edit icon" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-yellow-100 glowing-yellow-border rounded-lg p-5 text-yellow-300 flex flex-col space-y-5  bg-[#030712]">
        <DropdownMenuLabel>Sort by:</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={sortyValue}
          onValueChange={handleSelectChange}
        >
          <DropdownMenuRadioItem value="">none</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="name">name</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="diameter">
            diameter
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="climate">climate</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="terrain">terrain</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="population">
            population
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
