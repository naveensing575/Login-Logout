import React from "react";
import { auth, googleAuthProvider } from "../../firebase";
import styles from "./GoogleLoginButton.module.css";

function GoogleLoginButton() {
  const handleGoogleLogin = async () => {
    try {
      const provider = new googleAuthProvider();
      const result = await auth().signInWithPopup(provider);
      const user = result.user;
      console.log("User Info:", user);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <button
      className={styles["google-login-button"]}
      onClick={handleGoogleLogin}
    >
      Sign in with Google
    </button>
  );
}

export default GoogleLoginButton;
