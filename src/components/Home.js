import React  from 'react';
import Background from '../assests/home-page.jpeg';

const Home = () => {
    return(
        <main>
            {/*<BackgroungImage/>*/}
            <img src={Background} alt={Background}/>
            <div className="home-header">
                <h1>Hi, I'm Mike Copanos!</h1>
            </div>
        </main>

    )
};

export default Home;
