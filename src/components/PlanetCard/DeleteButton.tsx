import { Dialog, DialogTrigger, DialogContent } from "../../ui/dialog";
import { Button } from "../../ui/button";
import { CardTitle } from "../../ui/card";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Planet } from "../../types/types";
import { deletePlanet } from "../../lib/api";

export default function DeleteButton({ planet }: { planet: Planet }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deletePlanet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["planets"] });
    },
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2  border-[1px] border-red-400 glowing-red-border">
          <img src="/icons/delete.svg" alt="delete icon" />
        </div>
      </DialogTrigger>
      <DialogContent className="border-yellow-100 glowing-yellow-border w-64 md:w-96 rounded-lg  text-yellow-300 flex bg-[#030712] ">
        <div className="flex justify-center w-full">
          <div className=" py-0 md:py-5 h-full flex flex-col justify-between ">
            <div>
              <CardTitle className="mt-4">Deleting {planet.name}</CardTitle>
              <div className="flex flex-col space-y-1 mt-2">
                <p className="text-sm font-[200] -translate-y-[2px] text-left">
                  Are you sure you want to delete the planet?
                </p>
                {mutation.status !== "idle" && (
                  <p className="text-sm font-[200] -translate-y-[2px] text-left">
                    {mutation.status}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-4 justify-center items-end mt-5">
              <Button
                className="border-[1px] border-lime-400 glowing-green-border "
                onClick={() => {
                  mutation.mutate(planet.id);
                }}
                disabled={mutation.status === "pending"}
              >
                <img src="/icons/check.svg" alt="check icon" />
              </Button>
              <DialogPrimitive.Close>
                <Button className="border-[1px] border-red-400 glowing-red-border">
                  <img src="/icons/delete.svg" alt="delete icon" />
                </Button>
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
