'use client';
import React, { useState, useEffect } from 'react';
import './style.css';

const NewsAndUpdate = ({ postsLatest }) => {
  const [updateData, setUpdateData] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Mark component as hydrated to prevent mismatch
    setIsHydrated(true);
    
    // Only access sessionStorage on client-side
    try {
      if (typeof window !== 'undefined') {
        const stored = sessionStorage.getItem('updateData');
        if (stored) {
          setUpdateData(JSON.parse(stored));
        }
      }
    } catch (error) {
      console.error('Error parsing updateData from sessionStorage:', error);
      setUpdateData([]);
    }
  }, []);

  // Show loading state during SSR to prevent hydration mismatch
  if (!isHydrated) {
    return (
      <div className="slider-section-container">
        <div className="success-stories-section">
          <div className="loading-placeholder">
            <div className="newsandUpdates">
              <div className="NewsflexWrap">
                <div className="Newsitem">
                  <div>
                    <p>Loading news and updates...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Use updateData if available, otherwise fallback to postsLatest
  const displayData = updateData.length > 0 ? updateData : (postsLatest || []);

  return (
    <div className="slider-section-container" data-aos="fade-up" data-aos-offset="50" data-aos-delay="50">
      <div className="success-stories-section">
        <div>
          <div className="newsandUpdates">
            <div className="NewsflexWrap">
              <div className="Newsitem">
                <div>
                  <ul>
                    {displayData.map((item, index) => (
                      <li key={item.id || index}>
                        {/* Your existing list item content */}
                        {item.title || item.name || 'News Item'}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndUpdate;