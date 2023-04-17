import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'

// Creating component 
// function Greeting() {
//     return(
//         <div>
//         <h2>My First Component</h2>;
//   </div>

//     )
// }


// another way to create a component
//function Greeting() {

//     return React.createElement('h3',{},'hello ayesha')
//                                 element,{}, values 
//  }




// Nested Components
//    function Greeting(){
//        return <div>
//            <Person/>
//            <Message/>
//        </div>
//    }

//    const Person = () => <h2>hey, ayesha here </h2>
//    const Message = ()=>{
//     return <p> iam happy</p>
//    }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Greeting />);



// ********  BOOKS APP    ********

function BookList() {
  return (
    <section className = 'booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const author = ' Robert Greene'
const Book = () => {
    const title =    'The 48 Laws of Power';
    return (
      <article className = 'book'>
       <img src = 'https://m.media-amazon.com/images/I/41KY-NORo9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg' alt = "The 48 Laws of Power"/>
     <h2>{title}</h2>
     <h5>{author}</h5>
      </article>
    );
  };
  
   
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(<BookList />);




