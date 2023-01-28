import { useState } from 'react'
import './App.css'
import nav from './components/Nav/Nav'
import mouseList from './components/mouseList/mouseList'
import form from './components/form/form'

function App() {
  const [formState, setFormState] = useState('none')

  const searchHandler = (text) => {
    alert(`Поиск по запросу: ${text}`)
  }
  return (
    <div className="App">
      <nav handler={searchHandler} openForm={setFormState} />
      <mouseList />
      <form display={formState} closeForm={setFormState} />
    </div>
  )
}

export default App