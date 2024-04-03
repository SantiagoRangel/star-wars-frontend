import { useSearchParams } from "react-router-dom";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../ui/dropdown";
import FilterInput from "./FilterInput";

export default function Filters() {
  const types: string[] = ["name", "climate", "terrain"];
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(type, event.target.value);
    newSearchParams.set("page", "1");
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
          <img src="/icons/filter.svg" alt="edit icon" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-yellow-100 glowing-yellow-border rounded-lg p-5 text-yellow-300 flex flex-col space-y-5  bg-[#030712]">
        {types.map((type: string, index: number) => (
          <FilterInput
            key={index}
            handleInputChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(event, type)
            }
            defautValue={searchParams.get(type) ?? ""}
            type={type}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
