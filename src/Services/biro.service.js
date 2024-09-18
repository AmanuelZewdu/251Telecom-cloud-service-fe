import axiosInstance from "./api";

export const purchase = async (values) => {
  const response = await axiosInstance.post(
    "/next-cloud/create-account",
    values,
    {
      baseURL: "http://102.23.206.230",
    }
  );

  if (!response.status.toString().startsWith("2")) {
    console.log("Error", response.data);
    throw new Error(response.data.message);
  }

  return response.data;
};
