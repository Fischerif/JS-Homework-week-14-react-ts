import { useState } from "react";
import Email from "./cardo"; ///WE IMPORT EMAIL FUNCTIOn ///// THIS THING IS DRIVING ME MAD

import "./Sidebar.css"; ///WE IMPORTED THE CSS FILE

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true); ///I ORGGINALLY TRIED TO MAKE THE SIDEBAR POP IN AND OUT BUT IT JUST FLICKERED ENDLESSLY I THINK THE CODE I USED AS A REFERENCE WAS OUTDATED

    const handleSidebarOpen = () => {
        setSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="sidebar"> 
            <div className="sidebar_icon" onMouseEnter={handleSidebarOpen}>
                <i className="fas fa-bars"></i>
            </div>
            {sidebarOpen && (
                <>
                    <div className="sidebar_icon" onMouseLeave={handleSidebarClose}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="sidebar_items">
                        <div className="sidebar_item">
                            <i className="fas fa-home"></i>
                            <p>FISH</p>
           
           
                        </div>
                        <div className="sidebar_item">
                            <i className="fas fa-user"></i>
                            <p>ALCOHOL</p>
                        </div>
                        <div className="sidebar_item">
                            <i className="fas fa-envelope"></i>
                            <p>AMMUNITION</p>
                        </div>
                        <div className="sidebar_item">
                            <i className="fas fa-envelope"></i>
                            <p>CHEESES</p>
                        </div>
                        <div className="sidebar_item">
                            <i className="fas fa-envelope"></i>
                            <p>POISONS</p>
                        </div>
                        <div>
                            <Email /> 
                        </div>
                        <div>
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/transnistria-13-659032.png?f=webp" />
                            <img src="      "  />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Sidebar;
