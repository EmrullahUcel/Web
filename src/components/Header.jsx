import { Link, NavLink } from "react-router-dom";
import { MainContext , useContext } from "./Context";

const Header = () => {
  const {i18n , t} = useContext(MainContext);
  
  return (
    <nav className=" mt-5 pc:justify-end pc:flex">
      <div
        className="pc:flex pc:flex-col pc:mr-5 pc:m-[-20px]
            phone:flex phone:m-[-20px] text- justify-center items-center"
      >
        <Link
          className="hover:scale-125 ease-in duration-200 phone:mx-1"
          to="/"
        >
          {t('Home')}
        </Link>
        <Link
          className="hover:scale-125 ease-in duration-200 phone:mx-1"
          to="/About"
        >
          {t('About Me')}
        </Link>
        <Link
          className="hover:scale-125 ease-in duration-200 phone:mx-1"
          to="Contact"
        >
          {t('Contact')}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
