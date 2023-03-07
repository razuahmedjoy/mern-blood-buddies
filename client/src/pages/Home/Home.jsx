import React from 'react';
import Hero from '../../components/Hero/Hero';
import LatestDonors from '../../components/LatestDonors/LatestDonors';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Home = () => {

    return (<>
        <Hero />

       <SectionTitle title="Latest Donors"/>

        <LatestDonors />
    </>


    );
};

export default Home;