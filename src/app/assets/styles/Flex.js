
/**
 * A React component that creates a flexible container with various alignment and distribution options.
 * @param {object} props - The component's props.
 * @param {string} props.direction - The direction of the flex container. Can be 'row', 'column', or 'row-reverse'.
 * @param {string} props.align - The alignment of the flex items along the cross axis. Can be 'tretch', 'center', 'flex-start', or 'flex-end'.
 * @param {string} props.justify - The alignment of the flex items along the main axis. Can be 'flex-start', 'center', 'flex-end', 'pace-between', or 'pace-around'.
 * @returns {JSX.Element} The rendered component.
 * @example
 * import Flex from './Flex';
 *
 * const MyComponent = () => {
 *   return (
 *     <Flex direction="row" align="center" justify="space-between">
 *       <div>Item 1</div>
 *       <div>Item 2</div>
 *       <div>Item 3</div>
 *     </Flex>
 *   );
 * };
 */

import React from 'react';
import styled from "styled-components";

const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${( {direction} ) => direction || 'row'};
    align-items: ${( {align} ) => align || 'tretch'};
    justify-content: ${( {justify} ) => justify || 'tretch'};
    gap: 10px;
`

const Flex = ( props ) => {
    return <StyledFlex {...props} />
};

export default Flex;