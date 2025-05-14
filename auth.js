import NextAuth from "next-auth";

import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import getUserByEmail from "./uttils/getUserByEmail";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*****",
        },
      },
      async authorize(credentials) {
        console.log("credentials", credentials);
        if (!credentials) return null;

        try {
          const userData = getUserByEmail(credentials.email);
          console.log("userData", userData);
          if (userData) {
            const isMatch =
              userData.email === credentials?.email &&
              userData.password === credentials?.password;
            if (isMatch) {
              return userData;
            } else {
              console.log("Email or Password incorrect");
            }
          } else {
            console.log("User not found");
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response: "code",
        },
      },
    }),
  ],
  trustHost: true,
  secret: process.env.NEXTAUTH_SECRET,
});
