import styles from './header.module.scss';

const Header = () => {
    return <header className={styles.header}>
       <h1 className={styles.title}>Formula 1<br/>Rankings</h1>
       <img src="/car.png" alt="car"/>
    </header>
};

export default Header;