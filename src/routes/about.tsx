import { NavLink } from "@remix-run/react";

export default function About() {
  return (
    <div className="container">
      <h1 className="font-extrabold">About</h1>
      <p>This is a simple example of a Tauri app using Vite and React.</p>
      <NavLink to="/">Back to Home</NavLink>
    </div>
  );
}
