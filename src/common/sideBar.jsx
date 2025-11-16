import React from "react";
const Sidebar = () => {
    return (
        <div className="sidebar w-1/4 bg-teal-500 h-100 absolute top-0 left-0 p-3">
            <h1>SideBar</h1>
            <ul>
                <li>Dashboard</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>


        </div>
    )
}
export default Sidebar;