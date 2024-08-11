import { NavLink } from "@remix-run/react";
import { App } from "../App";

export default function Index() {
  return (
    <>
      <div className="m-4 p-4">
        <NavLink to="/about">To About</NavLink>
      </div>
      <App />
    </>
  );
}
