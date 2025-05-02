import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import getUserByEmail from "./uttils/getUserByEmail";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        console.log("credentials", credentials);
        if (!credentials) return null;

        try {
          const userData = getUserByEmail(credentials.email);
          if (userData) {
            const isMatch =
              userData.email === credentials.email &&
              userData.password === credentials.password;
            if (isMatch) {
              return userData;
            } else {
              alert("Email or Password incorrect");
            }
          } else {
            alert("User not found");
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    GoogleProvider({
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
  secret: process.env.NEXTAUTH_SECRET,
});
