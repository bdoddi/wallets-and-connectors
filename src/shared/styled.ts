import styled from "styled-components";
import { PrimarySpanInterface } from "./interfaces/styleInterfaces";
import { Colors } from "./theme";

export const GridComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: left;
  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const SubHeading = styled.h2`
  color: ${(props) => (props.color ? props.color : Colors.primaryColor)};
`;
export const PrimaryButton = styled.div`
  margin: 10px;
  padding: 10px;
  font-size: 18px;
  background: ${Colors.primaryColor};
  border: none;
  border-radius: 6px;
  color: ${(props) => (props.color ? props.color : Colors.backgroundColor)};
  cursor: pointer;
  width: 280px;
  font-weight: 500;
  &:hover {
    font-size: 20px;
  }
  align-items: center;
`;

export const PrimarySpan = styled.span<PrimarySpanInterface>`
  color: ${(props) => (props.color ? props.color : Colors.primaryColor)};
`;
