import React from "react";

export default function ErrorPage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>The page you are looking for does not exist or an error occurred.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
}
