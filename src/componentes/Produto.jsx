import {useState} from 'react'


function Produto() {

  const [count, setCount] = useState(0);
  const [lista, setLista] = useState([]);

  const incrementar = ()=>setCount(count + 1)
  const decrementar = ()=>setCount(count - 1)
  const adicionarLista = ()=>setLista([...lista, Math.random(10).toFixed(2)])



  return (
    <>
     <fieldset>

      <legend>UseState</legend>
      <p>Valor:{count}</p>
      <button onClick={incrementar}>Aumentar</button>
      <button onClick={decrementar}>Diminuir</button>
     </fieldset>

     <fieldset>
      <legend>Exemplo2</legend>
      <ul>
        {lista.map((n,i)=><li key={i}>{n}</li>)}
      </ul>
      <button onClick={adicionarLista}>Lista</button>
     </fieldset>
    </>
  )
}

export default Produto