import React from 'react';
import searchIcon from "src/app/assets/icons/search.svg"
import styled from "styled-components";
import Icon from "./Icon";
const StyledInput = styled.input`
    width: 450px;
    border-radius: 30px;
    border: none;
    padding: 15px 25px;
    color: rgba(165, 151, 138, 19);
    font-size: 22px;
`
const Input = () => {
    return (
        <div>
            <StyledInput placeholder="Filter" />
            <Icon src={searchIcon}/>
        </div>
    )
};

export default Input;