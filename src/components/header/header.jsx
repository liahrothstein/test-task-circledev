import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {

    return (
        <section className="header">
            <div className="links">
                <Link to='/photos'>Photos</Link>
                <Link to='/comments'>Comments</Link>
                <Link to='/todos'>Todos</Link>
            </div>
        </section>
    )
}