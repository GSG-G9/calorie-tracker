import * as yup from 'yup';

export const firstNameSchema = yup.object({
  firstName: yup.string().required().min(3),
});

export const lastNameSchema = yup.object({
  lastName: yup.string().required().min(3),
});

export const emailSchema = yup.object({
  email: yup.string().email().required().min(3),
});

export const passwordSchema = yup.object({
  password: yup.string().min(6).required(),
});
