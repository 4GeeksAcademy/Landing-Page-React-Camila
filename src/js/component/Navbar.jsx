import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark ">
                <div className="container-fluid ">
                    <a className="navbar-brand text-white fw-bold" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-white" href="#">Abaut</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Conctact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
};

export default Navbar;