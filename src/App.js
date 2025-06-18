import React from 'react'
import TodoList from './Page/TodoList'
import CreateTodo from './Page/CreateTodo'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Slider from './Page/Slider'
import AntdForm from './Page/AntdForm'
import Home from './Page/Home'
import Pages from './Page/Pages'


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create-todo' element={<CreateTodo/>}/>
        <Route path='/todo-list' element={<TodoList/>}/>
        <Route path ='/carousel' element={<Slider/>}/>
        <Route path='/antd' element={<AntdForm/>}/>
        <Route path='/pagenation' element={<Pages/>}/>
      </Routes>
    </Router>


    </>
  )
}

export default App