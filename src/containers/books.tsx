import { connect } from 'react-redux'
import BooksList from '../components/Book'
import { IState } from '../store/Books'

const mapStateToProps = (state: IState) => ({
  books: state
})

const mapDispatchToProps = {
//   onTodoClicked: toggleTodo
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(BooksList)