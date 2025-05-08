"use server";
import { signIn } from "@/auth";

async function handleSubmit(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log("formdata", formData);
  console.log("email", email, "passwrd", password);
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (err) {
    throw new Error(err?.message || "Login failed: " + err.message);
  }
}
export default handleSubmit;
