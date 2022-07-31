import React from 'react';
import '../style/styleLoadingScreen.css'
import { Spinner }from 'react-bootstrap'


const LoadingScreen = () => {
    return (
        <div className='overlay'>
             <Spinner animation="grow" variant="dark" />
        </div>
    );
};

export default LoadingScreen;