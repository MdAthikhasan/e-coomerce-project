"use client";
import { doSocialLogin } from "@/app/actions";
import Link from "next/link";

import { signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
export default function SignIn() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const createUser = (prevState, formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl,
    });
  };
  const [state, credentialsAction, pending] = useActionState(createUser, {
    message: "",
  });
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  if (session) {
    return (
      <div className="text-black text-center">You are already signed in</div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Sign In
        </h2>

        {/* Email and Password */}
        <form action={credentialsAction} className="space-y-5">
          {/* Email */}
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:ring-green-500 focus:border-green-500 shadow-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                name="password"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:ring-green-500 focus:border-green-500 shadow-sm pr-12"
                placeholder="Enter your password"
              />
              <span className="absolute inset-y-0 right-3 flex items-center">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.28a4.2 4.2 0 018.04 0m4.1 0a4.2 4.2 0 018.04 0M12 20c-1.78 0-3.5-.54-4.91-1.56a4.53 4.53 0 01-.65-.46M3 19.99V9.9m18 0v10.1"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <a href="#" className="text-sm text-green-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* CAPTCHA */}
          <div className="space-y-1">
            <label
              htmlFor="captcha"
              className="block text-sm font-medium text-gray-700"
            >
              Captcha
            </label>
            <div className="flex    justify-between items-center gap-x-2">
              <div className=" w-[20%] p-1 bg-green-500 text-white text-lg font-bold   rounded-md">
                3 v C C
              </div>
              <input
                id="captcha"
                type="text"
                className=" w-[80%] rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:ring-green-500 focus:border-green-500 shadow-sm"
                placeholder="Enter CAPTCHA"
              />
            </div>
          </div>

          {/* Submit Button */}
          <p aria-live="polite">{state?.message}</p>
          <input
            className="w-full rounded-md bg-green-600 py-2 text-white text-lg font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
            type="submit"
            value="Sign In"
          />
          {/* <button
            type="submit"
            className="w-full rounded-md bg-green-600 py-2 text-white text-lg font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
          >
            Sign In
          </button> */}
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="text-sm text-gray-500">Or Continue</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Sign-In Button */}
        <button
          onClick={() => doSocialLogin("google", callbackUrl)}
          type="button"
          className="w-full flex items-center justify-center gap-2 rounded-md bg-red-600 py-2 text-white text-lg font-semibold hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="h-6 w-6"
            fill="none"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.1 0 5.9 1.2 8.1 3.2l6.2-6.2C34.2 3.5 29.3 1 24 1 14.7 1 7 6.8 3.4 15.1l7.5 5.8C12.6 13.2 17.9 9.5 24 9.5z"
            />
            <path
              fill="#FBBC05"
              d="M48 24c0-1.5-.1-2.9-.4-4.2H24v8.1h13.5C35.2 32.3 30.2 36 24 36c-6.1 0-11.3-3.7-13.6-9.1l-7.5 5.8C7 41.3 14.7 47 24 47c10.7 0 19.7-7.2 22.8-17l.2-.2h-.1c.1 0 .1-.1.1-.2z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Footer */}
        <div className="text-center text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="text-green-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
