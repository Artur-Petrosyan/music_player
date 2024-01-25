import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    padding: 20px 30px;
    background: rgba(228, 228, 228, 160);
`
const Header = ({children}) => {
    return <StyledHeader>{children}</StyledHeader>
};

export default Header;