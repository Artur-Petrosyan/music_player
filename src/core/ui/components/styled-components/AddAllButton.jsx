import React from 'react';
import styled from "styled-components";

const StyledAddAllButton = styled.button`
    width: 100px;
    padding: 15px 20px;
    border: none;
    cursor: pointer;

    &:hover {
        background: #b9b9b9;
    }
`
const AddAllButton = ( {children , props}) => {
        return <StyledAddAllButton {...props}>{children}</StyledAddAllButton>
    }
;

export default AddAllButton;