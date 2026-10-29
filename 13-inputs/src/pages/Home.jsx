import { useState } from 'react'
function Home() {
  const [inputLogin, setInputLogin] = useState('')
  function efetuarLogin(){
  if(inputLogin == 'admin'){
    alert('Login efetuado com sucesso')
  }
  else{
    alert('Login incorreto')
  }
}
  return (
    <div className="app">
      <h1>Inputs Controlados</h1>
      <label htmlFor="login">Login</label>
      
      <input type="text"
      value={inputLogin}
      onChange={(e)=> setInputLogin(e.target.value)}
       />
       <p>
        {inputLogin}
       </p>
       <button onClick={efetuarLogin}>Entrar</button>
    </div>
  )
}
export default Home
