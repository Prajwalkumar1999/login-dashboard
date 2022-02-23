import"./Sidebar.css";
import logo from "../../assets/logo1.png";
import Mng from "./Mng.json";
import Leave from "./Leave.json";
import Prl from "./Prl.json";


const Sidebar=({sidebarOpen,closeSidebar}) => {
    return(
<div className={sidebarOpen ? "sidebar-responsive":""} id="sidebar">
<div className="sidebar__title">
    <div className="sidebar__img">
        <img src={logo} alt="logo"/>
        <h1>Simplii</h1>
    </div>
    <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>
</div>
<div className="sidebar__menu">
    <div className="sidebar__link active__menu_link">
        <i className="fa fa-home"></i>
        <a href="#">Dashboard</a>
    </div>
    <h2>MNG</h2>
        {Mng.map(data => (
                <div className="sidebar__link">
                        <i className={data.icon}></i>
                         <a href="#">{data.title}</a>
                 </div>
        )

                )}
    
    {/* <div className="sidebar__link">
        <i className="fa fa-building-o"></i>
        <a href="#">Company Management</a>
    </div>
    <div className="sidebar__link">
            <i className="fa fa-wrench"></i>
            <a href="#">Employee Management</a>
    </div>
    <div className="sidebar__link">
            <i className="fa fa-archive"></i>
            <a href="#">Warehouse</a>
    </div>
    <div className="sidebar__link">
    <i class="fas fa-handshake"></i>
        <a href="#">Contracts</a>
    </div> */}
    <h2>LEAVE</h2>
    {Leave.map(data => (
        <div className="sidebar__link">
        <i className={data.icon}></i>
        <a href="#">{data.title}</a>
        </div>
    ))}
    
    {/* <div className="sidebar__link">
            <i className="fa fa-sign-out"></i>
            <a href="#">Leave Policy</a>
    </div>
    <div className="sidebar__link">
    <i class="fa fa-calendar" aria-hidden="true"></i>
            <a href="#">Special Days</a>
    </div>
    <div className="sidebar__link">
            <i className="fa fa-file-o"></i>
            <a href="#">Apply for leave</a>
    </div> */}
    <h2>PAYROLL</h2>
    {Prl.map(data => (
            <div className="sidebar__link">
            <i className={data.icon}></i>
            <a href="#">{data.title}</a>
    </div>
    ))}
    
    {/* <div className="sidebar__link">
            <i className="fa fa-briefcase"></i>
            <a href="#">Paygrade</a>
    </div>
    <div className="sidebar__logout">
            <i className="fa fa-power-off"></i>
            <a href="#">Log Out</a>
    </div> */}
</div>
</div>
    )
}

export default Sidebar;