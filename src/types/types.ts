import { FieldError, UseFormRegister } from "react-hook-form";

export interface Planet {
  id: string;
  name: string;
  rotation_period?: string;
  orbital_period?: string;
  diameter: string;
  climate: string;
  gravity?: string;
  terrain: string;
  surface_water?: string;
  population: string;
  residents: string[];
  films?: string[];
  created: string;
  edited: string;
  url?: string;
}

export type FormData = {
  name: string;
  diameter: string;
  climate: number;
  terrain: string;
  population: string;
  residents: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  value?: string | string[];
};

export type ValidFieldNames =
  | "name"
  | "diameter"
  | "climate"
  | "terrain"
  | "population"
  | "residents";
