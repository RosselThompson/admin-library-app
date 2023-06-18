import { Admin, RaThemeOptions, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import { customTheme, customDarkTheme } from '@/theme/theme';
import Home from '@/components/home/home';
import Layout from '@/components/layout/layout';
import authors from '@/components/authors/authors';
import books from '@/components/books/books';

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Home}
    layout={Layout}
    theme={customTheme}
    darkTheme={customDarkTheme as RaThemeOptions}
    defaultTheme="dark"
  >
    <Resource {...authors} />
    <Resource {...books} />
  </Admin>
);
