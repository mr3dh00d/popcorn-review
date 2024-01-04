// import '@styles/navbar.css';
import logo from '@images/popcorn-logo.jpg';
// import { AiFillHome, AiFillFolderOpen } from "react-icons/ai";

interface NavbarProps {}
/**
 * Navbar component
 */
function Navbar(props: NavbarProps) {
  return (
    <nav className="w-full bg-white flex justify-center h-20 fixed top-0 z-50">
      <div className="w-full max-w-screen-xl grid grid-cols-2 justify-between items-center">
        <img className="rounded-full shadow-md" width={60} height={60} alt="logo-popcornreview" src={logo}/>
        <ul className="flex gap-12 justify-end items-center">
          <li>
              {/* <AiFillHome /> */}
              <a href="">Inicio</a>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
              {/* <AiFillFolderOpen/> */}
              <a href="">Mis reseñas</a>
          </li>
          <li>
            <img className="rounded-full" width={40} height={40} src="/avatars/avatar_1.png" alt="avatar" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;