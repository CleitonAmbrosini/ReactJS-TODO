import React, { Component } from 'react'

// components
import PageHeader from '../tamplete/pageHeader'
import TodoForm from './todoForm'
import TodoLista from './todoList'

export default class Todo extends Component{
  render(){
    return(
      <div>
        <PageHeader name="Tarefas" small="Cadastro"/>
        <TodoForm />
        <TodoLista />
      </div>
    )
  }
}