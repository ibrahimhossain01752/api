import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

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
                     
                      <div class="card-body contentBx ">
                        <h5 class="card-title">{pd?.login}</h5>
                        <p class="card-text">{pd?.node_id}</p>
                        <p class="card-text">{pd?.avatar_url}</p>
                        <p class="card-text">{pd?.gravatar_id}</p>
                        <p class="card-text">{pd?.url}</p>
                        <p class="card-text">{pd?.html_url}</p>
                        <p class="card-text">{pd?.followers_url}</p>
                        <p class="card-text">{pd?.following_url}</p>
                        <p class="card-text">{pd?.gists_url}</p>
                        <p class="card-text">{pd?.starred_url}</p>
                        <p class="card-text">{pd?.subscriptions_url}</p>
                        <p class="card-text">{pd?.organizations_url}</p>
                        <p class="card-text">{pd?.repos_url}</p>
                        <p class="card-text">{pd?.events_url}</p>
                        <p class="card-text">{pd?.received_events_url}</p>
                        <p class="card-text">{pd?.type}</p>
                        <p class="card-text">{pd?.site_admin}</p>
                        {/* <Link to={`/users/${pd._id}`}>{" "} */}
                        
                        {/* </Link> */}
                        </div>
                        </div>
                      </div>
                ))}
           </div> 
        </div>
    );
};

export default User;