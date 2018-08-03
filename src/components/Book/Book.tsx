import * as React from 'react';
import './Book.css';


const BookComponent = (props:any) => (
    <div className="bookRoot">
        <img className="bookCover" src={props.book.coverImage} />
        <div className="bookInfo">
            <p className="bookText">{props.book.title}</p>
            <p className="bookText">{props.book.author}</p>
            <p className="bookText">${props.book.price.toFixed(2)}</p>
        </div>
        {/* <button onClick={props.onBookClicked}>Delete</button> */}
    </div>
);

export default BookComponent;