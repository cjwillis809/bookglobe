import * as React from 'react';


const book = (props:any) => (
    <div className="Book">
        <p>Book name: {props.book.name}</p>
        <p>Book author: {props.book.author}</p>
        <p>Book page number: {props.book.page}</p>
        <p>Book price: {props.book.price}</p>
        <button onClick={props.onBookClicked}>Delete</button>
    </div>
);

export default book;