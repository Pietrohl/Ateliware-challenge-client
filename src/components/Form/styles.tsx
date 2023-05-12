import Paper from "@mui/material/Paper";
import { styled as MUIStyled } from "@mui/material/styles";
import styled from 'styled-components';


export const FormCard = MUIStyled(Paper)`
    display: flex;
    flex-flow: column wrap;
    padding: ${20}px;
`;

export const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${20}px;
`;