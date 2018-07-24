import { connect } from 'react-redux'
import BooksList from '../components/Book'
import { IState } from '../store/books'

const mapStateToProps = (state: IState) => ({
  books: state
})

const mapDispatchToProps = {
//   onTodoClicked: toggleTodo
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(BooksList)