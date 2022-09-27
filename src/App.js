import './App.css';
import React from 'react';
import MiApis from './components/MiApis';

function App(){
    return(
      <div className='App min-vh-100'>
            <MiApis/>
      </div>
    )
}
export default App;





















// useEffect(() => {
//   // askInfo();
//    fetch('https://motivational-quote-api.herokuapp.com/quotes', {method:"GET"})
//    .then((res) => res.json())
//    .then((json) => console.log(json))
//    .catch((error)=> console.log(error.message))
// }, []);



