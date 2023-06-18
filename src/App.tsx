import { Admin, RaThemeOptions, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import { customTheme, customDarkTheme } from '@/theme/theme';
import Home from '@/components/home/home';
import authors from '@/components/authors/authors';
import books from '@/components/books/books';

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Home}
    theme={customTheme}
    darkTheme={customDarkTheme as RaThemeOptions}
  >
    <Resource {...authors} />
    <Resource {...books} />
  </Admin>
);
