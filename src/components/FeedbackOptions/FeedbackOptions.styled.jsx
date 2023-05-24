import styled from "styled-components";


export const ButtonList = styled.ul`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

export const Button = styled.li`
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #e0e0e0;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: #6754bb 0px 0px 10px 0px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: #6754bb;
    }
`