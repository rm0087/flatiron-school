import Nav from "../nav"
import {Outlet} from "react-router-dom"
// This component will render on load.
export default function Root() {
  return (
    // Note: `className` props throughout this app leverage Tailwind CSS, an optional dependency.
    <div className="m-2.5">
      <Nav />
      <Outlet />
      <footer className="m-2.5">Sakib's Tea House, Inc.</footer>
    </div>
  );
}
