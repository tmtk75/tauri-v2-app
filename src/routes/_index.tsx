import { NavLink } from "@remix-run/react";
import { $path } from "remix-routes";
import { App } from "../App";

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
