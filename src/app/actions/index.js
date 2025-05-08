"use server";

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(provider, callbackUrl) {
  await signIn(provider, { redirectTo: callbackUrl });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

// export async function doCredentialLogin(formData, callbackUrl) {
//   if (!formData.email || !formData.password) {
//     // Throw an error that the client can catch
//     throw new Error("Invalid input");
//   }

//   try {
//     await signIn("credentials", {
//       ...formData,
//       redirectTo: callbackUrl,
//     });
//     // Redirection will happen; no need to return anything
//   } catch (error) {
//     // Rethrow or return error to client component
//     throw new Error("Login failed: " + error?.message);
//   }
// }
