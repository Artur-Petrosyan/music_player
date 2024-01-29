import React from 'react';
import styled from "styled-components";
import searchIcon from "src/app/assets/icons/search.svg"
import Icon from "./Icon";

const StyledInput = styled.input`
    width: 450px;
    border-radius: 30px;
    border: none;
    padding: 15px 50px;
    color: black;
    font-size: 22px;
`
const StyledInputContainer = styled.div`
    position: relative;

    & img {
        position: absolute;
        width: 30px;
        height: 30px;
        left: 13px;
        top: 13px;
        cursor: pointer;
    }
`
const Input = () => {
    return (
        <StyledInputContainer>
            <StyledInput id="filter__input" name="input" placeholder="Filter" className="filter__input"/>
            <label htmlFor="filter__input">
                <Icon src={searchIcon}/>
            </label>
        </StyledInputContainer>
    )
};

export default Input;