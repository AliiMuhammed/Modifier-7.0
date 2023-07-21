import { Outlet, Navigate } from "react-router-dom";
import { getAuthUser } from "../Helper/Storage";

const Guest = () => {
  const auth = getAuthUser();
  return <>{auth&&auth.type==="admin" ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default Guest;
