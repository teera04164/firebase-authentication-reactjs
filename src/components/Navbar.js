import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { logout, currentUser } = useAuth()
  const { displayName, email, photoURL } = currentUser

  const onLogOut = async () => {
    await logout()
  };

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Simple Auth
        </Link>
      </span>
      <ul className="list">
        <li className="listItem">
          <img
            src={photoURL}
            alt=""
            className="avatar"
          />
        </li>
        <li className="listItem">{displayName || email}</li>
        <li className="listItem" onClick={onLogOut}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
