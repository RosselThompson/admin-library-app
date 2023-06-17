import { ResourceProps } from "react-admin";
import BooksList from "./booksList";

const books: ResourceProps = {
    name: 'books',
    list: BooksList
}

export default books