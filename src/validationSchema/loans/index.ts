import * as yup from 'yup';

export const loanValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  status: yup.string().required(),
  cashback: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
