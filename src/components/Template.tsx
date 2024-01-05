import { AuthState } from "@slices/auth";
import Navbar from "./Navbar";

interface TemplateProps {
    auth: AuthState;
    children: React.ReactNode;
}

/**
 * Template component
 */
function Template(props : TemplateProps) {
  const { auth } = props;
  return (
    <div className="flex flex-col w-full items-center">
        <Navbar auth={auth}/>
        <div className="w-full max-w-screen-xl mt-20">
            { props.children }
        </div>
    </div>
  );
}

export default Template;