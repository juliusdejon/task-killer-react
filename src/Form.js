import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class DefaultForm extends Component {
  constructor (props) {
    super(props)

    this.initialState = {
      name: '',
      todo: ''
    }

    this.state = this.initialState
  }
  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render () {
    const { name, todo } = this.state
    return (
      <Form>
        <Form.Field>
          <label>Employee Name</label>
          <input
            placeholder='Name'
            name='name'
            value={name}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Todo</label>
          <input
            placeholder='Todo'
            name='todo'
            value={todo}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field />
        <Button type='submit' onClick={this.submitForm}>
          Submit
        </Button>
      </Form>
    )
  }
}
export default DefaultForm
