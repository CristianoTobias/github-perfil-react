import { useState } from 'react'
import Perfil from './components/Perfil'
import Formulario from './components/Formulario'
import ReposList from './components/ReposList'

function App() {
  const [formIsVisible, setFormIsVisible] = useState(true)
  const [nameUser, setNameUser] = useState('cristianotobias')
  
  return (
    <>
      <input type="text" onBlur={e => setNameUser(e.target.value)} placeholder='Name user Github:'  />
      {nameUser.length > 4  && (
        <>
        <Perfil nameUser={nameUser} />
          <ReposList nameUser={nameUser} />
        </>
      )}
      {/* {formIsVisible && <Formulario />}
      <button onClick={() => setFormIsVisible(!formIsVisible)} type='button'>toggle form</button> */}
    </>
  )
}

export default App
