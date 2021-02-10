import * as yup from 'yup';

export const emailSchema = yup.object({
  email: yup.string().email().required(),
});

export const passwordSchema = yup.object({
  password: yup
    .string()
    .min(6)
    .required()
    .matches(/(?=.*[0-9])/),
});

const validationLogin = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .min(6)
    .matches(/(?=.*[0-9])/),
});

export default validationLogin;
