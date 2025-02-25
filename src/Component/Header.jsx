import { Link, NavLink } from "react-router-dom";

function Header(){
  return (
    <>
    <ul className="d-flex justify-content-center align-items-center mt-5">
      <li className="mx-3"> 
        {""}
        <NavLink to="/event" className={({ isActive }) => (isActive ? 'active' : '')}> Events </NavLink>
       {/* <Link to="/events"> Events </Link>  */}
       </li>
      <li className="mx-3">
      <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}> Login </NavLink>
       {/* <Link to="/login"> Login </Link> */}</li>
      <li className="mx-3"> <Link to="/ajout"> Ajouter evenements </Link> </li>
      </ul>

    </>
  );
}
export default Header;