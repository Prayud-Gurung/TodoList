import React, { useState } from "react"
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react"
import useTodoStore from "../store/TodoStore"

const AddItem = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()//Chakra ui hook
    const [todo, setTodo] = useState({title: "", description: "", isCompleted: false})
    const store = useTodoStore()
    const toast = useToast()//To create toast notification

    function handleChange(event) {
        const name = event.target.name//name attribute of the element triggering onChange event
        const value = event.target.value//value of the evement triggering onChange event

        setTodo((prev) => {
            //previous value of the state add value to key as name on every letter change
            return { ...prev, [name]: value }
        })
    }

    async function addTask() {//Add to todo state or database using fetch using addTodo method from store
        const res = await store.addTodo(todo)//returned from addTodo in store
        if(res.success){
            toast({
                title: "Success",
                description: res.message,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }
        onClose()
        setTodo({ title: "", description: "", isCompleted: false })//Reset fields
    }
    return (
        <>
            <Button onClick={onOpen}>Add</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <ModalContent>
                    <ModalHeader>
                        Enter Task
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <FormControl>
                            <FormLabel>Title:</FormLabel>
                            <Input name="title" placeholder="Title" onChange={handleChange} value={todo.title} />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Description:</FormLabel>
                            <Input name="description" placeholder="Description" onChange={handleChange} value={todo.description} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter justifyContent={"space-around"}>
                        <Button onClick={addTask}>Save</Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddItem