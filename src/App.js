import React, { useState } from "react";

const Data = [
  {
    id: 1,
    question: "JAVA SCRIPT IS ?",
    answer: "A SCRIPTING LANGUAGE",
  },
  {
    id: 2,
    question: "HTML STANDS FOR ?",
    answer: "Hyper Text MArkup Language",
  },
  {
    id: 3,
    question: "CSS IS USED FOR ?",
    answer: "TO STYEL THE HTML PAGE",
  },
  {
    id: 4,
    question: "IDE IS STANDS FOR ?",
    answer: "Integrated Development Enviroment",
  },
  {
    id: 5,
    question: "What IS REACT ?",
    answer:
      "A JavaScript library for building user interfaces",
  },
  {
    id: 6,
    question: "Props Stands For ?",
    answer: "Properties passing from paraent component to childe component",
  },
  {
    id: 7,
    question: "WHAT IS YOUR NAME ?",
    answer: "MY Name Is M.Dansih",
  },
];

function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {

  const [selectedId, setSelectedId] = useState(null)

  function handleClick(id ){
    
    console.log(selectedId)

    setSelectedId(id !== selectedId ? id : null )
    // setSelectedId(id  )

    console.log(id )
  }

  return (
    <div className="flashCards">
      
      {
        Data.map( data=> 
          <div key={data.id} onClick={()=> handleClick(data.id)} className={data.id === selectedId ? 'selected' : {}}>
            <p>{data.id === selectedId ? data.answer : data.question}</p>
          </div>
        )
      }
   
    </div>
  );
}

export default App;
