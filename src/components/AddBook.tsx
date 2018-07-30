import * as React from 'react';
import { connect } from 'react-redux';
import IBook from '../model/Book';
import { addBook } from '../store/Books';

class AddBookForm extends React.Component<any, IBook> {

    constructor(props: any) {
        super(props);
        this.state = {
            "author": "",
            "coverImage": null,
            "genre": "",
            "id": 0,
            "pageLength": 0,
            "price": 0,
            "title": ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(event: any) {
        switch(event.target.name) {
            case 'title':
                this.setState({ title: event.target.value });
                break;
            case 'author':
                this.setState({ author: event.target.value });
                break;
            case 'pageNumber':
                this.setState({ pageLength: event.target.value });
                break;
            case 'price':
                this.setState({ price: event.target.value });
                break;
        }
    }

    public handleSubmit() {
        this.props.onAddBookClicked(this.state);
    }

    public render() {
        return (
            <form className="AddBook book" onSubmit={this.handleSubmit}>
                <h3>Add a book</h3>
                <p>Title <input type="text" name="title" value={this.state.title} onChange={this.handleChange} /></p>
                <p>Author <input type="text" name="author" value={this.state.author} onChange={this.handleChange} /></p>
                <p>Page number <input type="" name="pageNumber" value={this.state.pageLength} onChange={this.handleChange} /></p>
                <p>Price <input type="text" name="price" value={this.state.price} onChange={this.handleChange} /></p>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddBookClicked: (book: IBook) => dispatch(addBook(book))
    }
}

export default connect<any, any, any>(null, mapDispatchToProps)(AddBookForm)