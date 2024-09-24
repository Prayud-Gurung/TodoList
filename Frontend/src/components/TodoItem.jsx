import { Box, Button, Checkbox, Heading, HStack, ListItem, useBoolean } from "@chakra-ui/react";
import React from "react";

function TodoItem(props) {
    const [isCompleted, setIsCompleted] = useBoolean(props.isCompleted)
    props.isCompleted ? setIsCompleted.on : setIsCompleted.off
    
    return (
        <ListItem m={"4"}>
            <Box>
                <Heading as={"h3"}>{props.title}</Heading>
                <p>{props.description}</p>
                <HStack>
                <Checkbox size={"md"} colorScheme="green">Completed</Checkbox>

                </HStack>
            </Box>
        </ListItem>
    )
}

export default TodoItem