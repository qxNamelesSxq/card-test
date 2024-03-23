import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

export const Layout = () => (
  <div className={`${styles.layoutStyle}`}>
    <Header />
    <div className="content-area">
      <main className="main-content">
        <Outlet />
      </main>
    </div>
    <Footer />
  </div>
);

export default Layout;
