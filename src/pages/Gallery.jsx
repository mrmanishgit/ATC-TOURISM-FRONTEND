import React, { useEffect, useState } from 'react';
import './Gallery.css';
import Navbar from '../components/Navbar';
import axios from 'axios';

function GalleryCard({ title, img, desc, previewChars = 140 }) {
  const [showMore, setShowMore] = useState(false);

  const isLongText = desc && desc.length > previewChars;

  return (
    <div className='card-g'>
      <h3 className='text-h'>{title}</h3>
      <img src={img} alt={title} />
      <p style={{ margin: 0 }}>
        {showMore || !isLongText ? desc : desc.slice(0, previewChars) + '...'}
      </p>

      {isLongText && (
        <button
          className="view-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'View Less' : 'View More'}
        </button>
      )}
    </div>
  );
}

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  // 🔹 FIRST: declare function
  const fetchDestinations = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/destinations/all');
      setItems(res.data);
      setError('');
    } catch (err) {
      console.error('Failed to load destinations', err);
      setError('Failed to load destinations. Please check backend.');
    }
  };

  // 🔹 THEN: use it inside the effect
  useEffect(() => {
    const loadData = async () => {
      await fetchDestinations();
    };
    loadData();
  }, []);

  return (
    <>
      <Navbar />

      <div className='headline'>
        <h2>Hyderabad Destinations</h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className='grid-container'>
          {items.map((it) => (
            <GalleryCard
              key={it.destinationId}
              title={it.placeName}
              img={it.imageUrl}
              desc={it.description}
              previewChars={120}
            />
          ))}
        </div>
      </div>
    </>
  );
}
