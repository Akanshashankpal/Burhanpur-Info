import React, { useState, useEffect } from 'react';
import PlaceCard from './ExplorePart/PlaceCard';
import { Atom } from 'react-loading-indicators';

const Explore = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {loading ? (
        <Atom color="#fa0606" size="medium" text="" textColor="#f40c0c" />
      ) : (
        <PlaceCard />
      )}
    </div>
  );
};

export default Explore;
