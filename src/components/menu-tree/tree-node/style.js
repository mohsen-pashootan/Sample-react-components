import styled from "styled-components";

export const Icon = styled.span`
  float: right;
  margin-right: 10px;
  transition: 0.25s linear;
  transform: ${({ open }) => open && `rotate(-90deg)`};
`;

export const Div = styled.div`
/* padding-bottom:5px; */
margin : 10px 40px 10px 0px;
`

export const MapLogo = styled.i`
color: green;
padding: 0px 7px;
`