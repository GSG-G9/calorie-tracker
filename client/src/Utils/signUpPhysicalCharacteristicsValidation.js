import * as yup from 'yup';

export const activitySchema = yup.object({
  activityId: yup.number().min(1).required(),
});

export const ageSchema = yup.object({
  age: yup.number().required().positive(),
});

export const heightSchema = yup.object({
  height: yup.number().required().positive(),
});

export const weightSchema = yup.object({
  weight: yup.number().required().positive(),
});

export const goalWeightSchema = yup.object({
  goalWeight: yup.number().required().positive(),
});
