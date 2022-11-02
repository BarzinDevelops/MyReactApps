import Jokes from './Jokes'

function App() {
  const myJokes = { 
    
    joke1: {      
      name: 'joke1',
      question: "What is difference between 'me' and 'you'?", 
      punchline: "you have more letters hahahha",
    },
    joke2: {      
      name: 'joke2',
      punchline: "I'm afraid for the calendar. Its days are numbered.",
    },
    joke3: {      
      name: 'joke3',
      question: "Why do fathers take an extra pair of socks when they go golfing?", 
      punchline: "In case they get a hole in one!",
    },
    joke4: {      
      name: 'joke4',
      punchline: "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
    },
    joke5: {      
      name: 'joke5',
      question: "What do you call a fish wearing a bowtie?", 
      punchline: "Sofishticated.",
    },
    
  }
  
  
  return (
    <div className="app-container">
      <div className="jokes-wrapper">
        <h1 style={{color: "green", textAlign: "center", marginBottom: "20px", borderTop: "2px solid green", borderBottom: "2px solid green", padding: "10px 0"}}>This is Barry Jokes App</h1>
        <Jokes myJokes={myJokes.joke1}/>
        <Jokes myJokes={myJokes.joke2}/>
        <Jokes myJokes={myJokes.joke3}/>
        <Jokes myJokes={myJokes.joke4}/>
        <Jokes myJokes={myJokes.joke5}/>
      </div>
    </div>
  );
}

export default App;
