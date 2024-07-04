import React from "react";

function Card() {
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center">
                <img src="https://i.pinimg.com/564x/e6/c3/4a/e6c34afdf235e76c31344d6a933cae27.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Fid Out More!</a>
                    </div>
            </div>
        </div>
    )
};
export default Card;