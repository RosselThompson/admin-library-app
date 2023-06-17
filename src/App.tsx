import { Admin, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import Home  from '@/components/home/home';
import authors from '@/components/authors/authors';
import books from '@/components/books/books';

export const App = () => 
<Admin dataProvider={dataProvider} dashboard={Home}>
    <Resource {...authors} />
    <Resource {...books} />
</Admin>;
