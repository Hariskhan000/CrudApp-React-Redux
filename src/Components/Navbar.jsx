
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const allusers = useSelector((state) => state.app.users)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">RTK</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Create Post</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/read" className="nav-link active" aria-current="page">All Post ({allusers.length})</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar