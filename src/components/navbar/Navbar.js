import "./Navbar.css";
import avatar from "../../assets/avatar.svg";

const Navbar= ({sidebaropen,openSidebar}) => {
return (
<nav className="navbar">
    <div className="nav_icon" onClick={() => openSidebar()}>
    <i class="fa fa-bars"></i>
    </div>
    <div className="navbar__left">
        <a href="#">Subscriber</a>
        <a href="#">Video Management</a>
        <a className="active_link" href="#">Admin</a>
    </div>
    <div className="navbar__right">
        <a href="#">
        <i class="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="#">
        <i class="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        <a href="#">
            <img width="30" src={avatar} alt="avatar"/>
        </a>
    </div>
    </nav>
)
}

export default Navbar;