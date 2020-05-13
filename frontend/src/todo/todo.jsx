import React, { Component } from 'react'
import axios from 'axios'

// components
import PageHeader from '../tamplete/pageHeader'
import TodoForm from './todoForm'
import TodoLista from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{
  constructor(props){
    super(props)

    this.state = {
      description: '',
      list: []
    }

    this.refresh()
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  refresh(){
    axios.get(`${URL}?sort=-createdAt`)
      .then(resp => {
        this.setState({...this.state, description:'', list: resp.data})
      })
  }

  handleChange(e){
    this.setState({...this.state, description:e.target.value})
  }

  handleAdd() {
    const description = this.state.description
    axios.post(URL, {description})
      .then(resp => {
        this.refresh()
      })
  }

  handleRemove(todo){
    axios.delete(`${URL}/${todo._id}`)
      .then(res => {
        this.refresh()
      })
  }

  render(){
    return(
      <div>
        <PageHeader name="Tarefas" small="Cadastro"/>
        <TodoForm handleAdd={this.handleAdd} handleChange={this.handleChange} description={this.state.description}/>
        <TodoLista list={this.state.list} handleRemove={this.handleRemove}/>
      </div>
    )
  }
}