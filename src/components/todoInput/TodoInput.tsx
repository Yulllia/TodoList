import React, { useState } from 'react'
import TodoItem from '../todoList/TodoItem';
import { Item } from '../todoList/Todoitem.styles';
import { TodoList } from './interfaces';
import { AddTodo, Button, ButtonWrapper, Column, Input, Label, MainTitle, TitleItem, TodoWrapper } from './TodoInput.styles';
import './TodoInput.styles.ts';

function TodoInput() {
  const [list, setList] = useState<TodoList[]>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [id, setId] = useState<number[]>([]);
  const [count, setCount] = useState<number>(1);
  const [checkedItems, setCheckedItems] = useState<boolean[]>();

  const addTodo = (title: string, description: string) => {
    setCount(count+1);
    setId((oldList) => [...oldList ?? [], count])
    const newTodo = {
      id: count,
      title: title,
      description: description,
      status: 'Not Ready'
    };

    // add the todo to the list
    setList((oldList) => [...oldList ?? [], newTodo]);

    // clear input box
    setTitle("");
    setDescription("");
  };
  return (
    <div>
    <TodoWrapper>
      <MainTitle>Todo List</MainTitle>
      <Column>
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </Column>
        <Column>
        <Label htmlFor="description" className="label-title">Description</Label>
        <Input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}
        />
        </Column>
        <ButtonWrapper>
           <Button onClick={() => addTodo(title, description)}>Create</Button>
        </ButtonWrapper>
    {!list?.length && <AddTodo>Please add new todo!</AddTodo>}
    {list &&
        <TitleItem>
            <Item>id</Item>
            <Item>Title</Item>
            <Item>Description</Item>
            <Item>Status</Item>
        </TitleItem>
    }
    <ul>
     {list?.length && list?.map((item, index)=>{
        return (
          <TodoItem item={item} key={index} id={id} list={list} checkedItems={checkedItems} setCheckedItems={setCheckedItems} setList={setList}/>
          )
        })}
    </ul>
       </TodoWrapper>
    </div>
  )
}

export default TodoInput