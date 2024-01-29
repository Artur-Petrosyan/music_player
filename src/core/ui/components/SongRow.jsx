import React from 'react';
import styled from "styled-components";
const StyledSongRow = styled.tr`
    display: flex;
    justify-content: space-between;
    height: inherit;
    align-items: center;
    border-bottom: rgba(221, 220, 222, 183) 1px solid;
    padding: 15px 30px;
`
const SongRow = ( {children} ) => {
    return (
        <StyledSongRow>
            {children}
        </StyledSongRow>
    );
};

export default SongRow;