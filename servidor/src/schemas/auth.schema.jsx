import { z } from "zod";

export const registerSchema = z.object({
  name: z.string({
    required_error: "El nombre es obligatorio",
  }),
  email: z.string({
    required_error: "El correo electrónico es obligatorio",
    invalid_error: "El correo electrónico proporcionado no es válido"
  }).email(),
  password: z.string({
    required_error: "La contraseña es obligatoria",
    min_length_error: "La contraseña debe tener al menos 6 caracteres"
  }).min(6),
  phone: z.string({
    required_error: "El número de teléfono es obligatorio",
  }),
  rol: z.number({
    required_error: "El rol es obligatorio"
  })
});

export const loginSchema = z.object({
  email: z.string({
    required_error: "Email is required",
  }).email(),
  password: z.string({
    required_error: "Password is required"
  }).min(6),
});