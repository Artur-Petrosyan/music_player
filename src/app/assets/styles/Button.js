import styled from 'styled-components'

const StyledButton = styled.button`
    padding: 15px 25px;
    background: ${( {background} ) => background || "rgba(221,220,222,183)"};
    font-size: 18px;
    color: rgba(43,43,43,160);
    border: none;
    ${( {secondary} ) => secondary && `
       padding: 10px 20px;
`}
`
const Button = ( {children , props} ) => {
    return <StyledButton {...props}>{children}</StyledButton>
};

export default Button;