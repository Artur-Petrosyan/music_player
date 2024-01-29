/**
 * A custom header component that uses styled-components to style the header.
 *
 * @param {object} props - The component's props.
 * @param {JSX.Element} props.children - The child elements to render inside the header.
 * @returns {JSX.Element} The rendered header component.
 *
 * @example
 * import { Header } from './Header';
 *
 * const MyComponent = () => {
 *   return (
 *     <div>
 *       <Header>
 *         <h1>My Header</h1>
 *         <nav>
 *           <ul>
 *             <li><a href="#">Home</a></li>
 *             <li><a href="#">About</a></li>
 *             <li><a href="#">Contact</a></li>
 *           </ul>
 *         </nav>
 *       </Header>
 *     </div>
 *   );
 * };
 */
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