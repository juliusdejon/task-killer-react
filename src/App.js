import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import './App.css'

import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    characters: []
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render () {
    const { characters } = this.state
    return (
      <div className='container'>
        <Container textAlign='center'>
          <Table
            size='large'
            characterData={characters}
            removeCharacter={this.removeCharacter}
          />
          <Form handleSubmit={this.handleSubmit} />
        </Container>
      </div>
    )
  }
}

export default App
