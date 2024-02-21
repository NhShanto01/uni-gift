import React from 'react';
import nf from '../../image/404.jpg'

const Notfound = () => {
    return (
        <div className='d-flex flex-column align-items-center my-4'>
            <img src={nf} className='w-50' alt="" />
            <div>
            <button className='btn btn-danger'>
                <a href="/" className='text-light' style={{textDecoration:'none'}}>Get Back to The Home Page</a></button>
            </div>
        </div>
    );
};

export default Notfound;