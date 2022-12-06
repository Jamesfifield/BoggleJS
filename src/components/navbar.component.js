
import React from 'react';




const Navbar = ({onClick}) => {


    return(
        <nav className="navbar bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Boggle
            </a>
            <button onClick={onClick} value="4" className="btn btn-md">4x4</button>
            <button onClick={onClick} value="5" className="btn btn-md">5x5</button>
            </div>
        </nav>
    )

}

export default Navbar