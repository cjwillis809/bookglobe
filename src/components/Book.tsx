import * as React from 'react';


const book = (props:any) => (
    <div className="Book">
        <p>Book name: {props.book.name}</p>
        <p>Book author: {props.book.author}</p>
    </div>
);

export default book;