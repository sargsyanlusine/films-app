import styles  from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles['header']}>
            <div className="container">
                <div className="header__content">
                    <h1> List of films</h1>
                </div>
            </div>
        </header>

    )
};
export default Header;