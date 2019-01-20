import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import './App.css'

import Table from './Table'

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor'
      },
      {
        name: 'Mac',
        job: 'Bouncer'
      },
      {
        name: 'Dee',
        job: 'Aspring actress'
      },
      {
        name: 'Dennis',
        job: 'Bartender'
      }
    ]
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  render () {
    const { characters } = this.state
    return (
      <div className='container'>
        <Container fluid>
          <Table
            characterData={characters}
            removeCharacter={this.removeCharacter}
          />
        </Container>
      </div>
    )
  }
}

export default App
