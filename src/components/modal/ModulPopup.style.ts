import styled from "styled-components";

export const Backdrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	z-index: 500;
`;

export const Wrapper = styled.div`
	display: block;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 700;
	width: inherit;
	outline: 0;
	max-width: 40%;
	&.hidden {
		display: none;
	}
	@media screen and (min-width: 1600px) {
		max-width: 30%;
	}
	@media screen and (max-width: 800px) {
		max-width: 50%;
	}
`;


export const StyledModal = styled.div`
	z-index: 100;
	background: white;
	position: relative;
	margin: auto;
	border-radius: 8px;
`;

export const Content = styled.div`
	padding: 20px;
	max-height: 30rem;
	overflow-x: hidden;
	overflow-y: hidden;
    width: auto;
	font-size: 1rem;
    & > div {
        margin: 20px 10px 10px 10px;
        font-size: 24px;
    }
`;

export const Close = styled.button`
   position: absolute;
   top: 2%;
   right: 2%;
   font-size: 18px;
   border: none;
   border-radius: 3px;
   margin-right: 0.5rem;
   background: none;
   :hover {
    cursor: pointer;
   }
`;
export const SpanStyle = styled.span`
   color: blue;
   margin-right: 10px;
`;

