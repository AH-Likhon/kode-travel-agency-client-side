import React from 'react';
import notFoundImg from '../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div className="my-5">
            <img src={notFoundImg} alt="" />
            <h3>The page you are looking for is not available now😢</h3>
        </div>
    );
};

export default NotFound;