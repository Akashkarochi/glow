import React from "react";
import { loginWithGoogle } from "../utils/firebase";

function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">Welcome to GlowWise 🌟</h1>
      <button className="bg-blue-500 text-white px-4 py-2 mt-6" onClick={loginWithGoogle}>
        Login with Google
      </button>
    </div>
  );
}
export default Home;