import { NavLink } from "@remix-run/react";
import { App } from "../App";
import { $path } from "remix-routes";

export default function Index() {
  return (
    <>
      <div className="m-4 p-4">
        <NavLink to={$path("/about")}>To About</NavLink>
      </div>
      <App />
    </>
  );
}
