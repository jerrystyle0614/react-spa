import * as React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HomePage = (props) => {
    return (
        <div>
            <Header/>
            <h3>我是首頁</h3>
            <div>切版區域</div>
            <Footer/>
        </div>
    );
};

export default HomePage;