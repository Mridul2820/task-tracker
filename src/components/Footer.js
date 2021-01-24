import { Link } from "react-router-dom";

const Footer = () => {
    const footerDate = new Date();

    return (
        <footer>
            <p>CopyRight &copy; {footerDate.getFullYear()}</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
