import * as yup from "yup";
export const storeSchema = yup
    .object({
        name: yup.string().required(),
        city: yup.string().max(3).min(3).required(),
        address: yup.string().required(),
    })
    .required();