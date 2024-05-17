export const getAuthHeader = (username, password) => {
  const token = `${username}:${password}`;
  console.log("token is", token);
  const encodedToken = btoa(token);
  return `Basic ${encodedToken}`;
};
