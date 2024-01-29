
/**
 * A React component that renders an icon image with optional margin.
 * @param {object} props - The component's props.
 * @param {string} props.src - The URL of the icon image.
 * @param {string} props.alt - The alt text for the icon.
 * @param {string} props.marginRight - The margin to the right of the icon.
 * @returns {JSX.Element} The rendered component.
 * @example
 * import Icon from './Icon';
 *
 * const MyComponent = () => {
 *   return (
 *     <div>
 *       <Icon src="https://example.com/icon.png" alt="Icon" marginRight="10px" />
 *       <p>Some text with an icon.</p>
 *     </div>
 *   );
 * };
 */

import styled from "styled-components";

const StyledIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: ${( {marginRight} ) => marginRight || 0};
    cursor: pointer;
`
const Icon = ( props ) => {
    const {src} = props;
    return <StyledIcon {...props} src={src} alt="Icon"/>;
};

export default Icon;