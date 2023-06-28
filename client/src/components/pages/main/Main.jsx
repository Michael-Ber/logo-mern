import React, { useEffect } from 'react';
import './main.scss';

import { MainCatalog } from './catalog/MainCatalog';
import { MainNews } from './news/MainNews';
import { MainSearch } from './search/MainSearch';
import { MainSlider } from './carousel/MainSlider';
import { MainPopular } from './popular/MainPopular';
import { MainSponsors } from './sponsors/MainSponsors';

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
                            <MainSlider />
                            <MainPopular />
                        </div>
                    </div>
                </div>
            </section>

            <MainSponsors />
        </>
        
    )
}

export default Main;
