import styled from "styled-components";

export const TodoWrapper = styled.div`
    align-content: center;
    display: flex;
    margin: auto;
    flex-flow: column wrap;
    margin-top: 80px;
`
export const TodoListWrapper = styled.div`
    text-align: center;
`
export const ButtonWrapper = styled.div`
    text-align: center;
`

export const Button = styled.button`
	background: blue;
	border: none;
	border-radius: 10px;
	color: white;
	font-size: 18px;
	padding: 10px 40px;
	height: 50px;
	box-shadow: 3px 2px 2px grey;

	&:hover {
		outline: 2px solid blue;
	}
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid grey;
    border-radius: 5px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    font-size: 18px;
`
export const Column = styled.div`
    float: left;
    width: 50%;
    padding: 10px;
    @media screen and (max-width: 600px) {
    width: 100%;
    }
`
export const Label = styled.label`
    font-size: 18px; 
`
export const MainTitle = styled.h1`
    text-align: center; 
    text-transform: capitalize;
`
export const AddTodo = styled.div`
   text-align: center;
   margin-top: 100px;
   font-size: 25px;
`
export const TitleItem = styled.div`
   display: flex;
   font-weight: bold;
   margin: 100px 0 20px 0;
   cursor: pointer;

`






