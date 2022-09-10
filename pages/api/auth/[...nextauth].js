import axios from "../../../utils";
import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import Auth0Provider from "next-auth/providers/auth0";

export default NextAuth({
  secret: process.env.SECRET,
  debug: true,
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "@email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const request = await fetch("http://localhost:4000/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        const user = await request.json();
        if (user && user.token) {
          if (typeof window !== "undefined") {
            const token = JSON.stringify(user.token);
            console.log("Token", token);
            localStorage.setItem("@@wurdz-token", token);
          }

          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
