import * as React from 'react';


const book = (props:any) => (
    <div className="Book">
        <p>Book Title: {props.book.title}</p>
        <p>Book author: {props.book.author}</p>
        <p>Book page number: {props.book.pageLength}</p>
        <p>Book price: {props.book.price}</p>
        <button onClick={props.onBookClicked}>Delete</button>
    </div>
);

export default book;