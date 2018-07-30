import * as React from 'react';
import { connect } from 'react-redux';
import IBook from '../model/Book';
import { addBook } from '../store/Books';

interface ITest {
    onAddBookClicked(book: IBook): void
}

class AddBookForm extends React.Component<ITest, IBook> {

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
        this.setState({ title: event.target.value });
    }

    public handleSubmit() {
        this.props.onAddBookClicked(this.state);
    }

    public render() {
        return (
            <form className="AddBook book" onSubmit={this.handleSubmit}>
                <p>Title <input type="text" value={this.state.title} onChange={this.handleChange}/></p>
                <p>Author <input type="text" value={this.state.author}/></p>
                <p>Page number <input type="text" value={this.state.pageLength}/></p>
                <p>Price <input type="text" value={this.state.price}/></p>
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