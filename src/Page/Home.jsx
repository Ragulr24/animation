import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate();
  return (
<div className='bg-slate-300 h-screen'>
            <p className='text-2xl text-center font-semibold p-5'>Home Page</p>
    <div className='flex  justify-center gap-4 p-4'>         
    <Button type='primary' onClick={()=>navigate('/create-todo')}>Create Todo</Button>
    <Button type='primary' onClick={()=>navigate('/todo-list')}>Todo-List</Button>
    <Button type='primary' onClick={()=>navigate('/carousel')}>Slider</Button>
    <Button type='primary' onClick={()=>navigate('/antd')}>Antd Form</Button>
    <Button type='primary' onClick={()=>navigate('/pagenation')}>Pagenation</Button>
    </div>
</div>
  )
}

export default Home