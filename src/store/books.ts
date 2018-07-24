
import  IBook from '../model/book'


const initialState : IBook[] = [
    {
        author:'JRR Martin',
        name:'A song of Ice and Fire'
    },
    {
        author:'Tolkien',
        name:'The lord of the ring'
    },
    {
        author:'JK Rowling',
        name:'Harry Potter'
    }
]

const books = (state = initialState, action: any) => {
    // console.log(actionTypes.ADD_BOOK);
    return state;
}

export default books;

export interface IState {
    state: IBook[];
}