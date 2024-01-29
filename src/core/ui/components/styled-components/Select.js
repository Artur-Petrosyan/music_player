/**
 * A custom select component that uses styled-components to style the select element.
 *
 * @param {object} props - The component's props.
 * @param {JSX.Element} props.children - The child elements to render inside the select element.
 * @returns {JSX.Element} The rendered select component.
 *
 * @example
 * import { Select } from './Select';
 *
 * const MyComponent = () => {
 *   return (
 *     <div>
 *       <Select>
 *         <option value="option1">Option 1</option>
 *         <option value="option2">Option 2</option>
 *         <option value="option3">Option 3</option>
 *       </Select>
 *     </div>
 *   );
 * };
 */
import styled from "styled-components";

const StyledSelect = styled.select`
    width: 120px;
    height: 27px;
`
const Select = () => {
    return <StyledSelect name="Track Number"></StyledSelect>
};

export default Select;