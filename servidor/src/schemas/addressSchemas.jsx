import { z } from "zod";

export const addressSchema = z.object({
  Department: z.string({
    required_error: "El departamento es obligatorio",
  }),
  City: z.string({
    required_error: "La ciudad es obligatoria",
  }),
  Direccion: z.string({
    required_error: "La dirección es obligatoria",
  }),
  UserId: z.number({
    required_error: "El ID del usuario es obligatorio",
  })
});