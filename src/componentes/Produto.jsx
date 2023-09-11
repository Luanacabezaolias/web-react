import {useState} from 'react'


function Produto() {

  const [count, setCount] = useState(0)

  const incrementar = ()=>setCount(count + 1)
  const decrementar = ()=>setCount(count - 1)



  return (
    <>
     <fieldset>

      <legend>UseState</legend>
      <p>Valor:{count}</p>
      <button onClick={incrementar}>Aumentar</button>
      <button onClick={decrementar}>Diminuir</button>
     </fieldset>
    </>
  )
}

export default Produto