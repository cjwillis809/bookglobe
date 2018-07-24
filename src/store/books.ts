
import  IBook from '../model/book'


const initialState : IBook[] = [
    {
        author:'JRR Martin',
        name:'A song of Ice and Fire',
        page: 700,
        price: 12.20
    },
    {
        author:'Tolkien',
        name:'The lord of the ring',
        page: 700,
        price: 12.20
    },
    {
        author:'JK Rowling',
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