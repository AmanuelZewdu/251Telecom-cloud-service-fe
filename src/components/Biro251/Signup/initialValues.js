export const initialValuesBusiness = {
  planType: "business",
  agree: false,
  details: {
    quota: "",
    teamName: "",
    members: [
      { firstName: "", lastName: "", email: "", password: "", quota: "" },
    ],
  },
};

export const initialValuesPersonal = {
  planType: "personal",
  agree: false,
  details: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    quota: "",
  },
};
