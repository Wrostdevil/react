import React from 'react'
import Card from './components/card.jsx'
const App = () => {
  return (
    <div className='parent'>
    <Card a='https://images.unsplash.com/photo-1743105351262-3f9e6944920a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'user="Shakti" age={18}/>
    <Card a='https://plus.unsplash.com/premium_photo-1766436243777-9e3771e2421e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'user="Shuvom" age={12}/>
    <Card a='https://images.unsplash.com/photo-1768463852017-921060ff24fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'user="Aslam" age={18}/>
    </div>
  )
}

export default App