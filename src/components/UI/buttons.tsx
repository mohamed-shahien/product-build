import { ReactNode } from "react";

interface Iprop {
    children : ReactNode;
    className? : string;
}
const Button = ({children , className} : Iprop) => {
  return (
    <button className={`${className} rounded-md text-white w-full p-2`}>{children}</button>
  )
};
export default Button;