//Sintaxe JSX

import { useState } from 'react'
import { Item, Container, Input, TodoList, Button, List } from './Styles'

function App() {
    const [tasks, setTasks] = useState([])
    const [InputValue, setInputValue] = useState("")
  
    
    function inputChange(event){
        setInputValue (event.target.value)
    }

    function buttonClick(){
        setTasks([...tasks, InputValue])
        setInputValue(''); 


    }

    return (
        <Container>
            <TodoList>
                <Input placeholder="Write Your Task" onChange={inputChange}/>
                <Button onClick={buttonClick}>Add Task</Button>

                <List>
                    {
                    tasks.map( ( task, index ) => (
                            <Item key = {index} > {task}</Item>
                    ))
                    }

                </List>
            </TodoList>
        </Container>
    )
}

export default App
