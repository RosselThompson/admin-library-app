import { Admin, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import authors from '@/components/authors/authors';
import books from '@/components/books/books';

export const App = () => 
<Admin dataProvider={dataProvider}>
    <Resource {...authors} />
    <Resource {...books} />
</Admin>;
