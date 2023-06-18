import { AppBar, TitlePortal } from 'react-admin';

const MyAppBar: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <AppBar color="primary">
      <TitlePortal />
      {children}
    </AppBar>
  );
};

export default MyAppBar;
