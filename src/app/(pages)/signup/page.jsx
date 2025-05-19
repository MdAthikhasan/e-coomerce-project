"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  // Handle form submission and redirect
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    // Check if email and password are provided
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    const users = JSON.parse(localStorage.getItem("user"));

    const user = users?.find((u) => u?.email === email);
    if (user && user?.email === email) {
      alert("User already exists");
    } else {
      localStorage.setItem("user", JSON.stringify([{ email, password }]));
      alert("User created successfully");
      router.push("/signin");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Sign Up
        </h2>

        {/* Form */}
        <form onSubmit={submitHandler} className="space-y-5">
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
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-green-600 py-2 text-white text-lg font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="text-sm text-gray-500">Or Continue</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="text-green-500 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
