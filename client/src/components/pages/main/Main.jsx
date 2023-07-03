import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './main.scss';

import { MainCatalog } from './catalog/MainCatalog';
import { MainNews } from './news/MainNews';
import { MainSearch } from './search/MainSearch';
import { MainSlider } from './carousel/MainSlider';
import { MainPopular } from './popular/MainPopular';
import { MainSponsors } from './sponsors/MainSponsors';
import { MainAbout } from './about/MainAbout';
import { MainLinks } from './links/MainLinks';

import { Good } from '../good/Good';

const Main = () => {

    

    return (
        <>
            <section className="main">
                <div className="container">
                    <div className="main__wrapper">
                        <div className="main__left">
                            <MainCatalog />
                            <MainNews />
                        </div>
                        <div className="main__right">
                            <MainSearch />
                            <Routes>
                                <Route path='/:id' element={<Good />}/>
                                <Route path="/" element={<><MainSlider /><MainPopular /></>}/>  
                            </Routes>
                            
                        </div>
                    </div>
                </div>
            <MainSponsors />
            </section>  
            <MainAbout />
            <MainLinks />
        </>
        
    )
}

export default Main;
