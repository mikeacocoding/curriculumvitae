import React from 'react';
import styled from 'styled-components';

const SidebarStyle = styled.div`
    background:white;
    padding:15px;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0px #9E9E9E;
`;


const Sidebar = ({ children }) => (
    <SidebarStyle>
        <div className="Sidebar-container">
            {children}
        </div>
    </SidebarStyle>
);

export default Sidebar;