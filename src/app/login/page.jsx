'use client'
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Login() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // start the sign In process.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/")
      }
      else {
        /*Investigate why the login hasn't completed */
        console.log(result);
      }

    } catch (err) {
      console.error("error", err.errors[0].longMessage)
    }
  };

  return (
    <div>
      <form className="border border-slate-500 m-8">
        <div >
          <label htmlFor="email">Email</label>
          <input className="border border-slate-500" onChange={(e) => setEmailAddress(e.target.value)} id="email" name="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" />
        </div>
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  );
}