import React, {useState, useEffect} from 'react';



// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(prevCount => prevCount + 1);
//   }
//   const decrement = () => {
//     setCount(prevCount => prevCount - 1);
//   }
//   return (
//     <main className='main'>
//       <div className="app">
//         <button onClick={decrement}>-</button>
//         <span>{count}</span>
//         <button onClick={increment}>+</button>
//       </div>
//     </main>
//   );
// }

const App = () =>{
  const[resourceType, setResourceType] = useState('')
  const[windowSize, setWindowSize] = useState('')
  
  // const changeSize = ()=>{
  //   window.resizeTo(100, 100);
  //   console.log(window.innerWidth)
  // }
  useEffect(()=>{
    if(windowSize) { console.log(window.innerWidth)}
  }, [windowSize])

  return(
    <div className='results'>
      <div className='btn-wrapper'>
        <button onClick={()=> setResourceType('posts')}>Posts</button>
        <button onClick={()=> setResourceType('users')}>Users</button>
        <button onClick={()=> setResourceType('comments')}>Comments</button>        
        <button onClick={()=> setWindowSize(window.innerWidth)}>Change Size</button>        
      </div >
      <h1>{resourceType}</h1>
      <h3>Window size is: {windowSize}</h3>
    </div>
    
  )
}

export default App;
