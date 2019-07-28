import React from 'react';
import styled from 'styled-components';

const InfoStyle = styled.div`
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0px #9E9E9E;
`;

const Info = ({ children }) => (
    <InfoStyle>
        <div className="Info-container">
            {children}
        </div>
    </InfoStyle>
);

export default Info;