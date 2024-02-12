import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar () {
    return(
        <div className="header">

        <nav className='navbar'>
        <img src="https://i.postimg.cc/0NNqk55q/345-C0248-AB01-4-F1-B-B66-F-434-CEE7077-AD.png" alt="" />
        <ul className='nav-links'>
            <li>
                {/* link is a React component that extends the html <a> element to provide prefetching and client-side navigation between routes, in css file when set the elment of a, it will reflected to link */}
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/About'>About</Link>
            </li>
            <li>
                <Link to='/Properties'>Properties</Link>
            </li>
            <li>
                <Link to='/Contact'>Contact</Link>
            </li>
        </ul>

        </nav>

      
        </div>
    );
}
export default Navbar;