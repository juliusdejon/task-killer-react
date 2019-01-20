import React, { Component } from 'react'
import { Header, Image, Table, Button } from 'semantic-ui-react'

const TableHeader = () => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Employee</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  )
}
const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <Table.Row key={index}>
        <Table.Cell>
          <Header as='h4' image>
            <Image
              src='https://react.semantic-ui.com/images/avatar/small/matthew.png'
              rounded
              size='mini'
            />
            <Header.Content>
              {row.name}
              <Header.Subheader>{row.job}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          <Button negative onClick={() => props.removeCharacter(index)}>
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    )
  })
  return <Table.Body>{rows}</Table.Body>
}

class DefaultTable extends Component {
  render () {
    const { characterData, removeCharacter } = this.props
    return (
      <Table basic='very' celled collapsing>
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </Table>
    )
  }
}

export default DefaultTable
