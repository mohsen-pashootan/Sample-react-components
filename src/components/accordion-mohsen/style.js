import styled from "styled-components";

export const MAIN = styled.span`
  color: #231f20;
  font-family: "Barlow", Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42857143;
  font-size: 16px;
`;

export const Title = styled.h2`
  margin-top: 17px;
  margin-bottom: 1.7rem;
  cursor: pointer;
  font-weight: 700;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #25292d;
  position: relative;
  text-transform: uppercase;
  display: block;
  text-decoration: none;
  letter-spacing: 1px;
  line-height: 0.92;
  color: #0c0f0a;
`;

export const Icon = styled.span`
  float: right;
  margin-right: 5px;
  transition: 0.25s linear;
  transform: ${({ open }) => open && `rotate(180deg)`};
`;

export const UL = styled.ul`
  display: block;
  position: relative;
  padding-inline-start: 25px;
  max-width: fit-content;
`;

export const LI = styled.li`
  margin-top: 0;
  margin-bottom: 1.1rem;
`;

export const Label = styled(MAIN)`
  &:after {
    content: ":";
  }
  font-weight: 600;
`;

export const DATA = styled(MAIN)`
  margin-right: 1.1rem;
`;
