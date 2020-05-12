import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import React from 'react'

// Components
import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../tamplete/menu'

export default props => (
  <div className="container">
    <Menu />
    <Todo />
    <About />
  </div>
)
