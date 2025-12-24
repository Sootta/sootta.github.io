import './Header.css';

const Link = () => {
    return (
        <nav className="nav-links">
            <a className="nav-link">Latest</a>
            <a className="nav-link">Trending</a>
            <a className="nav-link">Bookmarks</a>
        </nav>
    );
};

export const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <a className="logo">
                    Sootta
                </a>
          
            </div>
        </header>
    );
};
