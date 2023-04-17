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
const firstBook = {
  author: 'Laura Dave',
  title: 'The Last Thing He Told Me',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71LyuJP7yUL._AC_UL600_SR600,400_.jpg',
};
const secondBook = {
  author: 'Robert Greene',
  title: 'The 48 Laws of Power',
  img: 'https://m.media-amazon.com/images/I/41KY-NORo9L._SX355_BO1,204,203,200_.jpg',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  );
};
  
   
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(<BookList />);




