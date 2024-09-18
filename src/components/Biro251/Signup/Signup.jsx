import { Formik } from "formik";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PurchaseForm } from "./PurchaseForm";
import { initialValuesBusiness, initialValuesPersonal } from "./initialValues";
import { purchaseFormSchema } from "./schema";
import { purchase } from "../../../Services/biro.service";

export const Purchase = () => {
  const [query] = useSearchParams();
  const planType = query.get("plan") === "personal" ? "personal" : "business";
  const [plan, setPlan] = useState(planType);

  const onSubmit = async ({ details, agree, ...values }) => {
    const data = { ...values, ...details };
    try {
      const response = await purchase(data);
      console.log(response);
    } catch (err) {
      console.error(err);
      alert("An error occurred, please try again: " + err.message);
    }
  };

  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="max-w-screen-md mx-auto"
    >
      <Formik
        initialValues={
          plan === "business" ? initialValuesBusiness : initialValuesPersonal
        }
        validationSchema={purchaseFormSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ values, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <PurchaseForm
              values={values}
              plan={plan}
              setPlan={setPlan}
              isSubmitting={isSubmitting}
            />
          </form>
        )}
      </Formik>
    </motion.div>
  );
};
