// import '@styles/navbar.css';
import { routes } from '@/routes/routes';
import logo from '@images/popcorn-logo.jpg';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
// import { AiFillHome, AiFillFolderOpen } from "react-icons/ai";

interface NavbarProps {}
/**
 * Navbar component
 */
// @ts-ignore
function Navbar(props: NavbarProps) {
  const [submenu, setSubmenu] = useState(false);
  return (
    <nav className="w-full bg-white flex justify-center h-20 fixed top-0 z-50">
      <div className="w-full max-w-screen-xl grid grid-cols-2 justify-between items-center">
        <img className="rounded-full shadow-md" width={60} height={60} alt="logo-popcornreview" src={logo}/>
        <ul className="flex gap-12 justify-end items-center">
          <li>
              {/* <AiFillHome /> */}
              <Link to={routes.base}>
                Inicio
              </Link>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
              {/* <AiFillFolderOpen/> */}
              <Link to={routes.reviews.base}>
                Mis reseñas
              </Link>
          </li>
          <li className="relative">
            <div className="flex items-center gap-2" onClick={() => setSubmenu(!submenu)}>
                <img className="rounded-full" width={40} height={40} src="/avatars/avatar_1.png" alt="avatar" />
              {submenu ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            { submenu &&
              <div className="w-52 mt-2 absolute right-0 bg-white border flex py-2 rounded-md shadow-md">
                <Link to={routes.base} className="w-full p-2 hover:bg-gray-300">
                  Cerrar Sesión
                </Link>
              </div>
            }
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;