export const getUserFromStorage = () => {
  const userData = localStorage.getItem("user");

  if (userData) {
    try {
      const user = JSON.parse(userData);
      return { user };
    } catch (err) {
      localStorage.removeItem("user");
      return null;
    }
  }

  // Explicitly return null if data is missing
  return null;
};
