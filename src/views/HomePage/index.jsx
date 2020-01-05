import * as React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import img from '../../contents/images/footer-background.jpg';

const HomePage = (props) => {
    return (
        <div>
            <Header/>
            <h3>我是首頁</h3>
            <img src={img}/>
            <Footer/>
        </div>
    );
};

export default HomePage;