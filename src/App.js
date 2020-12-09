import React, {useState} from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import {Form, List, Header, Container} from 'semantic-ui-react'
import User from './user'


function App() {

  const [userInput, setInput] = useState('')
  const [showList, setShow] = useState(false)
  const [items, setItems] = useState([])

  const setData = ({items}) => {
    if(items){
      setItems(items)
      setShow(true)
    }
  }

  const handleSearch = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/search/users?q=${userInput}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }


  return (
    <div>
      <div className= "navbar">
        <Header as='h1'>Search Github Users</Header>
      </div>
      <div className= "search">
        <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Input
                placeholder='Type Username'
                name='github user'
                onChange = {handleSearch}
              />
              <Form.Button content='Search' />
            </Form.Group>
          </Form>
      </div>
      <Container>
        <div className="list">
          <List animated verticalAlign='middle' size = "massive">
            {showList? items.map((item) => (
              <User users={item} />
            )) : <div></div>}
          </List>
        </div>
      </Container>
    </div>
    
  );
}

export default App;
