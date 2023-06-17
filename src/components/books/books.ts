import { ResourceProps } from "react-admin";
import BooksList from "@/components/books/booksList";
import BooksEdit from "@/components/books/booksEdit";
import BooksCreate from "@/components/books/booksCreate";
import BookIcon from '@mui/icons-material/Book'

const books: ResourceProps = {
    name: 'books',
    icon: BookIcon,
    list: BooksList,
    edit: BooksEdit,
    create: BooksCreate
}

export default books