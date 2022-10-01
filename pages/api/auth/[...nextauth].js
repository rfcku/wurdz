import NextAuth from "next-auth";
// import AppleProvider from "next-auth/providers/apple";
// import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";
// import Auth0Provider from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "../../../utils";

const API = process.env.API_URL || "http://localhost:4000"; //"https://wurdz-api.herokuapp.com";
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
        console.log("Accessing", API);
        const { password, username } = credentials;
        const user = await api.post(`${API}/login`, { password, username });
        if (user && user.token) {
          console.log("user response", user, user.token);
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
});
