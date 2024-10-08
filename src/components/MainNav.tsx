import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

export default function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-orange-500">
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          className="font-bold bg-transparent text-zinc-600 rounded-full border border-orange-500 px-10 shadow-xl hover:bg-orange-500 hover:text-white"
          onClick={async () => await loginWithRedirect()}
        >
          Sign in
        </Button>
      )}
    </span>
  );
}
