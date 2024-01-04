import Navbar from "./Navbar";

interface TemplateProps {
    children: React.ReactNode;
}

/**
 * Template component
 */
function Template(props : TemplateProps) {
  return (
    <div className="flex flex-col w-full items-center">
        <Navbar/>
        <div className="w-full max-w-screen-xl mt-20">
            {props.children}
        </div>
    </div>
  );
}

export default Template;