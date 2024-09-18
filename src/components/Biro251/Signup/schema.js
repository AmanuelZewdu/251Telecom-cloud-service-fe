import * as yup from "yup";

const quota = yup.string().oneOf(["", "none", "1 GB", "3 GB", "5 GB", "10 GB"]);

const personalFormSchema = yup.object({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid email").required("required"),
  password: yup.string().min(8, "Too short").required("required"),
  quota,
});

const businessFormSchema = yup.object({
  quota,
  teamName: yup.string().required("required"),
  members: yup.array().of(personalFormSchema).min(1),
});

export const purchaseFormSchema = yup.object({
  planType: yup.string().oneOf(["personal", "business"]).required(),
  agree: yup.boolean().isTrue("You must agree to terms").required(),
  details: yup.mixed().when("planType", {
    is: (planType) => planType === "personal",
    then: () => personalFormSchema,
    otherwise: () => businessFormSchema,
  }),
});
