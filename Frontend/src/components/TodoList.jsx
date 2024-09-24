import React from 'react'
import TodoItem from './TodoItem'
import { Container, Heading, ListIcon, ListItem, UnorderedList } from '@chakra-ui/react'
import useTodoStore from '../store/TodoStore'

const TodoList = () => {
    const store = useTodoStore()

    return (
        <Container maxW={"container.sm"} bg={"orange.100"} p={4}>
            <Heading as={"h1"} size={"lg"} textAlign={"center"} >To Do List</Heading>
            <UnorderedList>
                {/* loop through todo in store */}
                {store.todos.map((item, index) => {
                    return <TodoItem key={index} title={item.title} description={item.description} isCompleted={item.isCompleted} />
                })}
            </UnorderedList>
        </Container>
    )
}

export default TodoList