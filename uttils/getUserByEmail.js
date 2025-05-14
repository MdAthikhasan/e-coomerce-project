function getUserByEmail(email) {
  const users = [{ email: "tanj@gmail.com", password: "12345" }];
  const userData = users?.find((user) => user?.email === email);
  return userData;
}

export default getUserByEmail;
