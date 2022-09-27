import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const MiApis = () => {
  //setear los hooks useState
  const [phrases, setPhrases] = useState([]);
  const [search, setSearch] = useState('');

    //función de busqueda
    const searcher = (e) => {
        setSearch(e.target.value)
    }

    //funcion para traer los datos de la Api
    useEffect(() => {
        const url = 'https://motivational-quote-api.herokuapp.com/quotes';
        const randomQuotes = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setPhrases(data); 
            }
      randomQuotes();
    },[])

    //renderización de la vista

  return (
    <div className='showQ'>
        <nav className='navbar'>
            <div className='head'>
             <h1>Inspirational Quotes</h1>
             <input value={search} onChange={searcher} type='text' placeholder='Search your topic...' className='control'/>
            </div>
        </nav>
        <div id="stars"></div>
        <div className='category'>
            <h3>Author - Quote</h3>
            
        <div className='container'>
          {phrases.filter((data) => {
              return data.quote.toLowerCase().includes(search.toLowerCase())
           })
           .reverse()
           .sort((a, b) => {
               return (a.person > b.person) ? 1 : -1
           })
           .map((data, index) => (
            <div key={index.toString()}>
              <h6>{data.person}</h6>
              <h6>{data.quote}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MiApis;



