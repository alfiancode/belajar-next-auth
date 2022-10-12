import React from "react";
import { signIn, signOut, getSession } from "next-auth/react";
import Router from "next/router";
export default function Home({ session }) {
  console.log(session);

  // const router for push to another page
  const router = Router;
  // const url = process.env.NEXTAUTH_URL;
  // async function handleGoogleSignin() {
  //   signIn("google", { callbackUrl: "https://belajar-next-auth.vercel.app/" });
  // }
  // async function handleGithubSignin() {
  //   signIn("github", {
  //     callbackUrl: "https://belajar-next-auth.vercel.app/",
  //   });
  // }
  if (session) {
    return (
      <div>
        <h1>Already signed in</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      <div className="text-5xl">masuk dulu gaes</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push("/login")}
      >
        {" "}
        ke halaman login{" "}
      </button>
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

// getserverSideProps session
