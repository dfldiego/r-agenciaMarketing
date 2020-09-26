import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing';
import { homeObjOne } from './Data';

const Home = () => {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjOne} />
        </>
    )
}

export default Home
