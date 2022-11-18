import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <div>
           <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
                {services.map((pd, idx) => (
                    <div class="col">
                    <div class="card h-100 ">
                     <div class="imgBx">
                     <img src={pd?.img} class="card-img-top images44" alt="..."/>
                     </div>
                      <div class="card-body contentBx ">
                        <h5 class="card-title">{pd?.title}</h5>
                        <p class="card-text">{pd?.price}</p>
                        <Link to={`/users/${pd._id}`}>{" "}
                        <button class="btn23">Shop Now</button>
                        </Link>
                        </div>
                        </div>
                      </div>
                ))}
           </div> 
        </div>
    );
};

export default User;