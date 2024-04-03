import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import PlanetForm from "./PlanetForm/PlanetForm";

export default function CreateButton() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="border-[1px] border-cyan-200 glowing-blue-border">
          <img src="/icons/plus.svg" alt="edit icon" />
        </Button>
      </DialogTrigger>
      <PlanetForm
        setOpen={(open: boolean) => {
          setOpen(open);
        }}
      />
    </Dialog>
  );
}
