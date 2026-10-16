import { Outlet, NavLink } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import styles from './Layout.module.css';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/lectures', label: 'Lectures', end: false },
];

function getNavLinkClass({ isActive }) {
  return `${styles.navLink} ${isActive ? styles.active : ''}`;
}

function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.layoutHeader}>
        <nav className={styles.layoutNav} aria-label="Main">
          <NavLink to="/" className={styles.navBrand}>
            <span className={styles.navBrandIcon} aria-hidden="true">
              ⚛️
            </span>
            <span className={styles.navBrandText}>
              <span className={styles.navBrandTitle}>React Lectures</span>
              <span className={styles.navBrandSub}>CS-3 · 2026</span>
            </span>
          </NavLink>
          <div className={styles.navRight}>
            <ul className={styles.navLinks}>
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={getNavLinkClass}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className={styles.layoutMain}>
        <Outlet />
      </main>

      <footer className={styles.layoutFooter}>
        <span className={styles.footerOrnament} aria-hidden="true">
          ✦
        </span>
        <p>© 2026 CS-3 React Lectures. Built with React &amp; Vite.</p>
      </footer>
    </div>
  );
}

export default Layout;
