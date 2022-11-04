import React from 'react'
import { TodoList } from '../todoInput/interfaces';
import { Backdrop, Close, Content, SpanStyle, StyledModal, Wrapper } from './ModulPopup.style';
import Popup from 'reactjs-popup';
import { MainTitle } from '../todoInput/TodoInput.styles';

function ModalPopup(props: { showModal: boolean, setShowModal: (open: boolean) => void; item: TodoList } ) {
    const { title, description, status } = props.item;

    return (
        <Popup open={props.showModal} closeOnDocumentClick onClose={() => props.setShowModal(false)}>
        {props.showModal && (
            <React.Fragment>
            <Backdrop />
            <Wrapper>
            <StyledModal>
              <Content>
                  <MainTitle>{title}</MainTitle>
                  <div><SpanStyle>Description:</SpanStyle>{description}</div>
                  <div><SpanStyle>Status:</SpanStyle>{status}</div>
              </Content>
              <Close type="button" onClick={() => props.setShowModal(false)}>
              X
              </Close>
              </StyledModal>
            </Wrapper>
          </React.Fragment>
        )}
        </Popup>
    )
}

export default ModalPopup