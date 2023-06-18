import { ComponentType } from 'react';
import { AppBarProps, LayoutProps, Layout as RALayout } from 'react-admin';
import MyAppBar from './myAppBar';

const Layout: React.FC<LayoutProps> = (props): JSX.Element => {
  return <RALayout {...props} appBar={MyAppBar as ComponentType<AppBarProps>} />;
};

export default Layout;
