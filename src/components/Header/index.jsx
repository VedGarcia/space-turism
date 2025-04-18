import { Link } from 'react-router-dom';
import spaceTurismLogo from '../../assets/img/shared/logo.svg';

const Header = () => {
    return (
        <header className="text-red-200 text-base absolute top-0 left-0">
            <Link to="/Home">{spaceTurismLogo}</Link>
        </header>
    );
}

export default Header;