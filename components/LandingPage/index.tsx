'use client';
import React from 'react';
import MainSection from './MainSection';
import CardSection from './CardSection';
import Styles from './LandingPage.module.scss';
import StudioGallery from './StudioGallery';
import Location from './LocationSection';

const LandingPage = () => {
  return (
    <main className={Styles['landingpage']}>
      <video src='./video-pilates.mp4' autoPlay loop muted className={Styles['landingpage__mainvideo']} />
      <MainSection />

      <CardSection />

      <StudioGallery />

      <Location />
    </main>
  );
};

export default LandingPage;
