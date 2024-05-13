import { Container, VStack, Heading, Text, Input, Button, List, ListItem, ListIcon } from "@chakra-ui/react";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading mb={6}>Todo App</Heading>
        <Text fontSize="xl">Manage your tasks efficiently</Text>
        <VStack width="100%" mt={4}>
          <Input
            placeholder="Add a new task"
            value={input}
            onChange={handleInputChange}
            size="lg"
          />
          <Button colorScheme="blue" onClick={handleAddTodo} mt={2}>Add Task</Button>
        </VStack>
        <List spacing={3} mt={6} width="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} fontSize="lg">
              <ListIcon as={FaCheckCircle} color="green.500" />
              {todo}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;