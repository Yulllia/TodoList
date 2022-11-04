import React, { useState } from 'react'
import ModalPopup from '../modal/ModalPopup';
import { TodoList } from '../todoInput/interfaces';
import { CheckBox, Item, ListItem } from './Todoitem.styles';
import styled from "styled-components";



function TodoItem(props: { item: TodoList, id: number[], list: TodoList[], setList: (checkedItems: TodoList[])=>void, checkedItems: boolean[] | undefined, setCheckedItems:  (checkedItems: boolean[])=>void} ) {
    const { title, description, id } = props.item;
    const [showModal, setShowModal] = useState<boolean>(false);

    const openModal = ()=> {
        if (!showModal) {
			setShowModal(true);
		} else {
			setShowModal(false);
		}  
    }
    const onChange = (event: { target: HTMLInputElement }) => {
    const target = event.target as HTMLInputElement;
      props.setCheckedItems({
        ...props.checkedItems ?? [],
        [target.name]: target.checked
      });
      if(target.checked){
        props.list[id-1].status = 'Done'
      } else {
        props.list[id-1].status = 'Not Ready'
      }

    }
    return (
        <ListItem>
         <div onClick={openModal}>
            <Item>#{id}</Item>
            <Item>{title}</Item>
            <Item>{description}</Item>
        </div>
        <CheckBox type="checkbox" name={String(id)} checked={props.checkedItems && props.checkedItems[id]} onChange={onChange}/>
        {showModal ? <ModalPopup showModal={showModal} setShowModal={setShowModal} item={props.item}/> : null}
        </ListItem>
    )
}

export default TodoItem