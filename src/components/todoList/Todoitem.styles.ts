import styled from "styled-components";

export const ListItem = styled.li`
    display: flex;
    margin: 30px 0 20px 0;
    cursor: pointer;
    & > div {
        display: flex;
    }
`
export const Item = styled.p`
    margin-right: 15px;
    font-size: 25px;
    width: 170px;
    & > p:first-child{
       width: 25px; 
    }
`
export const CheckBox = styled.input`
    width: 25px;
`

