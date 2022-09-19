import styled from "styled-components";

export const GridComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: left;
  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const SubHeading = styled.h2`
  color: #61dafb;
`;
export const PrimaryButton = styled.div`
  margin: 10px;
  padding: 10px;
  font-size: 18px;
  background: #61dafb;
  border: none;
  border-radius: 6px;
  color: black;
  cursor: pointer;
  width: 280px;
  &:hover {
    font-size: 20px;
  }
  align-items: center;
`;
