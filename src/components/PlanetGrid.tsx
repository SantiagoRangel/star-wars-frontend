import { useQuery } from "@tanstack/react-query";
import { getPlanets } from "../lib/api";
import { Planet } from "../types/types";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PlanetCard from "./PlanetCard/PlanetCard";
import { Button } from "../ui/button";

import { textures } from "../utils/textureLoader";
export default function PlanetGrid() {
  const [page, setPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsArray: string[] = [];
  searchParams.forEach((value, key) => {
    searchParamsArray.push(`&${key}=${value}`);
  });

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["planets", page, searchParams.toString()],
    queryFn: () => getPlanets(searchParamsArray),
  });

  if (isPending) {
    return <span className="text-yellow-300 z-10 mt-[100px]">Loading...</span>;
  }

  if (isError) {
    return (
      <span className="text-yellow-300 z-10 mt-[100px]">
        Error: {error.message}
      </span>
    );
  }

  if (data.count === 0) {
    return (
      <span className="text-yellow-300 z-10  mt-[100px]">
        No planets found with those search parameters :(
      </span>
    );
  }

  return (
    <div className=" mt-20 flex flex-col items-center space-y-16 z-10 ">
      <div className="flex flex-wrap gap-10 justify-center px-8">
        {data.planets.map((planet: Planet) => (
          <PlanetCard planet={planet} key={planet.name} textures={textures} />
        ))}
      </div>

      <div className="flex gap-5">
        <Button
          className="border-[1px] border-yellow-100 glowing-yellow-border text-yellow-200 font-[400] hover:cursor-pointer"
          onClick={() => {
            setPage((old) => Math.max(old - 1, 0));

            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set("page", (page - 1).toString());
            setSearchParams(newSearchParams);
          }}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          className="border-[1px] border-yellow-100 glowing-yellow-border text-yellow-200 font-[400] hover:cursor-pointer"
          onClick={() => {
            if (data.hasMore) {
              setPage((old) => old + 1);
              const newSearchParams = new URLSearchParams(searchParams);
              newSearchParams.set("page", (page + 1).toString());
              setSearchParams(newSearchParams);
            }
          }}
          disabled={!data?.hasMore}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
