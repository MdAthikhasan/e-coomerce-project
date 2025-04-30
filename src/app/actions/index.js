"use server";

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(provider, callbackUrl) {
  await signIn(provider, { redirectTo: callbackUrl });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
