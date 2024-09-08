import React from 'react';
/////import './header.css';

const Header: React.FC = () => {
    return (
        <div style={{ backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/00/37/60/10/1000_F_37601015_R8RMfelHG5IUtR5sZd0KPPm03ndpSsSj.jpg)', backgroundSize: 'cover' }}>
            <h1 style={{ fontSize: '80px', fontFamily: 'Times New Roman' }}>
                {'THE ONLY GROCERY STORE ON THE PLANET'}
            </h1>
        </div>
    );
};

export default Header;