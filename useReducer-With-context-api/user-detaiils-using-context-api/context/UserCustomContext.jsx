import { UserContext } from "./UserContext";
import { useContext } from "react";

export const UserCustomContext = () => {
  return useContext(UserContext);
};
