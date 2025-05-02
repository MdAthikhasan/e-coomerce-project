"use server";
import { signIn } from "@/auth";

async function handleSubmit(formData) {
  console.log("formData", formData);
  try {
    await signIn("credentials", { ...formData, redirectTo: "/" });
  } catch (err) {
    throw new Error(err?.message || "Login failed: " + err.message);
  }
}
export default handleSubmit;
