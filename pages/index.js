import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
export default function Home() {
  const { data: session, status } = useSession();

  const url = process.env.NEXTAUTH_URL;
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "https://belajar-next-auth.vercel.app/" });
  }
  async function handleGithubSignin() {
    signIn("github", {
      callbackUrl: "https://belajar-next-auth.vercel.app/",
    });
  }
  if (session) {
    return (
      <div>
        <h1>Already signed in</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className="text-5xl">
        oke dah masuk gaes .........................
      </div>
    </div>
  );
}
