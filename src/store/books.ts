
import  IBook from '../model/Book'


const initialState : IBook[] = [
    {
        author:'JRR Martin',
        id: 0,
        name:'A song of Ice and Fire',
        page: 700,
        price: 12.20
    },
    {
        author:'Tolkien',
        id: 1,
        name:'The lord of the ring',
        page: 700,
        price: 12.20
    },
    {
        author:'JK Rowling',
        id: 2,
        name:'Harry Potter',
        page: 700,
        price: 12.20
    }
]

const books = (state = initialState, action: any) => {
    return state;
}

export default books;

export interface IState {
    state: IBook[];
}