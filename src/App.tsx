import { useEffect, useState } from 'react';
import './App.css';
import { Input } from './components/input/Input';
import { HeaderTable } from './components/table/HeaderTable';
import { Row } from './components/table/Row';

type ResponceType = {
  id: number
  title: string
  body: string
  userId: number
}

const App = () => {
  const [data, setData] = useState<ResponceType[]>([])

  useEffect(() => {
    (async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
      })
      let data = await responce.json()
      data.length = 10
      setData(data)
    })()
    
  }, [])

  return (
    <div className="container">
      <Input placeholder='Поиск'/>
      <table className='table'>
        <tbody>
        <HeaderTable/>
        {data.map( row => <Row key={row.id} id={row.id} title={row.title} body={row.body}/>)}
        </tbody>
        
      </table>
    </div>
  );
}

export default App;
