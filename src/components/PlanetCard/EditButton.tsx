import { Planet } from "../../types/types";
import { Dialog, DialogTrigger } from "../../ui/dialog";
import PlanetForm from "../PlanetForm/PlanetForm";
import { useState } from "react";

export default function EditButton({ planet }: { planet: Planet }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className=" inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 border-[1px] border-orange-200 glowing-orange-border"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <img src="/icons/edit.svg" alt="edit icon" />
        </div>
      </DialogTrigger>
      <PlanetForm
        setOpen={(open: boolean) => {
          setOpen(open);
        }}
        edit
        planet={planet}
      />
    </Dialog>
  );
}
