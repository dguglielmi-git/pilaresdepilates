'use client';
import React from 'react';
import Wave from 'react-wavify';

interface WavesProps {
  backgroundColor?: string;
}

const Waves = ({ backgroundColor = '#cc1bf8' }: WavesProps) => {
  return (
    <Wave
      fill={backgroundColor}
      paused={false}
      options={{
        height: 20,
        amplitude: 20,
        speed: 0.15,
        points: 3,
      }}
    />
  );
};

export default Waves;
