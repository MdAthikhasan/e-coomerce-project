function getUserByEmail(email) {
  const users = JSON.parse(localStorage.getItem("user")) || [];
  const userData = users?.find((user) => user?.email === email);
  return userData;
}

export default getUserByEmail;
