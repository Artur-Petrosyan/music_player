import styled from "styled-components";

const StyledIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-right: ${( {marginRight} ) => marginRight || 0};
    
`
const Icon = ( props ) => {
    const {src} = props;
    return <StyledIcon {...props} src={src} alt="Icon"/>;
};

export default Icon;