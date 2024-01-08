// import '@styles/navbar.css';
import { routes } from '@/routes/routes';
import { AuthState, logout } from '@slices/auth';
import logo from '@images/popcorn-logo.jpg';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@/store/hooks';
// import { AiFillHome, AiFillFolderOpen } from "react-icons/ai";

interface NavbarProps {
  auth: AuthState
}
/**
 * Navbar component
 */
// @ts-ignore
function Navbar(props: NavbarProps) {
  const dispatch = useAppDispatch();
  const [submenu, setSubmenu] = useState(false);
  const { auth } = props;
  const { user } = auth;

  const renderUser = () => {
    return (
      <ul className="flex justify-end items-center">
        <li className="mr-12">
            {/* <AiFillHome /> */}
            <Link to={routes.feed}>
              Inicio
            </Link>
          {/* <Link to="/">Home</Link> */}
        </li>
        <li className="mr-8">
            {/* <AiFillFolderOpen/> */}
            <Link to={routes.reviews.base}>
              Mis reseñas
            </Link>
        </li>
        <li className="relative">
          <div className="flex items-center gap-2" onClick={() => setSubmenu(!submenu)}>
              <img className="rounded-full" width={40} height={40} src={`/avatars/${user?.avatar}.png`} alt="avatar" />
            {submenu ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          { submenu &&
            <div className="w-52 mt-2 absolute right-0 bg-white border flex py-2 rounded-md shadow-md">
              <button className="w-full p-2 hover:bg-gray-300" onClick={() => dispatch(logout())}>
                Cerrar Sesión
              </button>
            </div>
          }
        </li>
      </ul>
    );
  }

  const renderAuthentication = () => {
    return (
      <ul className="flex justify-end items-center">
        <li className="">
          <Link to={routes.login} className="px-4 py-2 border-2 rounded-full border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition ease-out">Iniciar Sesión</Link>
        </li>
      </ul>
    );
  }

  return (
    <nav className="w-full bg-white flex justify-center h-20 fixed top-0 z-50">
      <div className="w-full max-w-screen-xl grid grid-cols-2 justify-between items-center">
        <img className="rounded-full shadow-md" width={60} height={60} alt="logo-popcornreview" src={logo}/>
        { auth.isAuthenticated ? renderUser() : renderAuthentication()}
      </div>
    </nav>
  );
}

export default Navbar;