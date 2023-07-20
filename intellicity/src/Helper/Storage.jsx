// Save user info to localStorage
export const setAuthUser = (data) => {
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 2); // Set the expiration to 2 hours from now

  const userInfo = {
    user: data,
    expiresAt: expirationDate.getTime(), // Save the expiration timestamp in milliseconds
  };

  localStorage.setItem("user", JSON.stringify(userInfo));
};

// Get user info from localStorage
export const getAuthUser = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  if (userInfo && userInfo.expiresAt > Date.now()) {
    // User info is still valid, return the user data
    return userInfo.user;
  } else {
    // User info has expired or does not exist, remove it from localStorage and return null
    localStorage.removeItem("user");
    return null;
  }
};

// Remove user info from localStorage
export const removeAuthUser = () => {
  localStorage.removeItem("user");
};
