import * as React from 'react';


const book = (props:any) => (
    <div className="Book">
        <p>Book name: {props.books[0].name}</p>
        <p>Book author: {props.books[0].author}</p>
    </div>
);

export default book;