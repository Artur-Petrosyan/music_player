
/**
 * A React component that renders a button with customizable styling and props.
 * @param {object} props - The component's props.
 * @param {string} props.background - The background color of the button.
 * @param {boolean} props.secondary - Whether to use a smaller padding for the button.
 * @param {object} props.props - Additional props to pass to the button element.
 * @returns {JSX.Element} The rendered component.
 * @example
 * import Button from './Button';
 *
 * const MyComponent = () => {
 *   return (
 *     <div>
 *       <Button background="blue">Click me</Button>
 *       <Button secondary background="green">Click me</Button>
 *     </div>
 *   );
 * };
 */

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
const Button = ( {children, props} ) => {
    return <StyledButton {...props}>{children}</StyledButton>
};

export default Button;