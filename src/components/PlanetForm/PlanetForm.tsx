import { DialogContent } from "../../ui/dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormField from "./FormField";
import { useForm } from "react-hook-form";
import { FormData, Planet } from "../../types/types";
import { Button } from "../../ui/button";
import { createPlanet, updatePlanet } from "../../lib/api";
import { useEffect } from "react";

const planetSchema = z.object({
  name: z.string().min(1),
  diameter: z.string().min(1),
  climate: z.string().min(1),
  terrain: z.string().min(1),
  population: z.string().min(1),
  residents: z.string().nullish(),
});

export default function PlanetForm({
  setOpen,
  edit,
  planet,
}: {
  setOpen: (open: boolean) => void;
  edit?: boolean;
  planet?: Planet;
}) {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(planetSchema) });

  const createMutation = useMutation({
    mutationFn: createPlanet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["planets"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updatePlanet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["planets"] });
    },
  });
  const onSubmit = (data: FormData) => {
    data.diameter = data.diameter.toString();
    data.population = data.diameter.toString();

    if (edit && planet) {
      updateMutation.mutate({ id: planet.id, planet: data });
      return;
    }
    createMutation.mutate(data);
  };
  useEffect(() => {
    if (createMutation.status === "success") {
      setOpen(false);
      createMutation.reset();
    }
    if (updateMutation.status === "success") {
      setOpen(false);
      updateMutation.reset();
    }
  }, [createMutation.status, updateMutation.status]);

  return (
    <DialogContent className="border-yellow-100 glowing-yellow-border w-[280px] md:w-96 rounded-lg  text-yellow-300 flex bg-[#030712]">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col ">
          <h1 className="text-2xl font-bold mb-4">
            {edit ? "Edit Planet" : "Create Planet"}
          </h1>

          <FormField
            type="text"
            placeholder="Jupyter"
            name="name"
            register={register}
            error={errors.name}
            value={planet?.name}
          />
          <FormField
            type="text"
            placeholder="1000"
            name="diameter"
            register={register}
            error={errors.diameter}
            value={planet?.diameter}
          />

          <FormField
            type="text"
            placeholder="Snowy"
            name="climate"
            register={register}
            error={errors.climate}
            value={planet?.climate}
          />
          <FormField
            type="text"
            placeholder="Grasslands, oceans, mountains, deserts"
            name="terrain"
            register={register}
            error={errors.terrain}
            value={planet?.terrain}
          />
          <FormField
            type="text"
            placeholder="3400000"
            name="population"
            register={register}
            error={errors.population}
            value={planet?.population}
          />
          <FormField
            type="text"
            placeholder="Trump, Petro, Shakira"
            name="residents"
            register={register}
            error={errors.residents}
            value={planet?.residents}
          />
          <div className="flex flex-col items-center ">
            <Button
              type="submit"
              disabled={createMutation.status === "pending"}
              className="border-[1px] w-20 border-yellow-200 font-[300] glowing-yellow-border"
            >
              {edit ? "edit" : "create"}
            </Button>
            {createMutation.status !== "idle" && (
              <span className="error-message mt-4 text-xs font-[300] text-yellow-200 ">
                {createMutation.status}
              </span>
            )}
            {updateMutation.status !== "idle" && (
              <span className="error-message mt-4 text-xs font-[300] text-yellow-200 ">
                {updateMutation.status}
              </span>
            )}
          </div>
        </div>
      </form>
    </DialogContent>
  );
}
