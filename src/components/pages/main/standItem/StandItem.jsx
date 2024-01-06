import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { StandsService } from '../../../../services/card.service';
import styles from './standItem.module.css';
import { createGraph } from './createGraph';

const StandItem = () => {
  const { id } = useParams();
  const [stand, setStand] = useState({});
  const [standIndex, setStandIndex] = useState(0);
  const [standDotIndex, setStandDotIndex] = useState(0);
  const [userIndex, setUserIndex] = useState(0);
  const [userDotIndex, setUserDotIndex] = useState(0);

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchData = async () => {
      const data = await StandsService.getById(id);
      setStand(data);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (stand?.id && stand?.stats) {
      createGraph(stand.stats);
    }
  }, [stand]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStandIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        setStandDotIndex(newIndex % (stand.stand_images?.length || 1));
        return newIndex % (stand.stand_images?.length || 1);
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [stand.stand_images]);

  const handleStandDotClick = (index) => {
    setStandIndex(index);
    setStandDotIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUserIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        setUserDotIndex(newIndex % (stand.user_images?.length || 1));
        return newIndex % (stand.user_images?.length || 1);
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [stand.user_images]);

  const handleUserDotClick = (index) => {
    setUserIndex(index);
    setUserDotIndex(index);
  };

  if (!stand?.id) {
    return <div>Stand not found</div>;
  }

  const currentStandImage = stand.stand_images?.[standIndex] || '';
  const currentUserImage = stand.user_images?.[userIndex] || '';

  return (
    <>
      <Link className={styles.back} to={'/'}>
        {' '}
        ← Back
      </Link>
      <div className={styles.standContainer}>
        <div className={styles.images}>
          <div className={styles.imageAndDots}>
            {stand.stand_images?.length > 0 && (
              <div className={styles.standImage}>
                <img src={currentStandImage} alt="stand" />
              </div>
            )}
            <div className={styles.slideshowDots}>
              {stand.stand_images.map((_, idx) => (
                <div
                  key={idx}
                  className={`${styles.slideshowDot} ${
                    standDotIndex === idx ? `${styles.slideshowDotActive}` : ''
                  }`}
                  onClick={() => handleStandDotClick(idx)}
                ></div>
              ))}
            </div>
          </div>
          <div className={styles.imageAndDots}>
            {stand.user_images?.length > 0 && (
              <div className={styles.userImage}>
                <img src={currentUserImage} alt="standUser" />
              </div>
            )}
            <div className={styles.slideshowDots}>
              {stand.user_images.map((_, idx) => (
                <div
                  key={idx}
                  className={`${styles.slideshowDot} ${
                    userDotIndex === idx ? `${styles.slideshowDotActive}` : ''
                  }`}
                  onClick={() => handleUserDotClick(idx)}
                ></div>
              ))}
            </div>
            <h2 className={styles.standUserName}>{stand.standUser}</h2>
          </div>
        </div>
        <div className={styles.standInfo}>
          <h2 className={styles.standName}>{stand.name}</h2>
          <canvas stats={stand.stats} id="stats" width="300" height="300"></canvas>
          <p>
            <b>Types: </b>
            {stand.type.join(', ')}
          </p>
          <p>
            <b>Abilities: </b>
            {stand.abilities.join(', ')}
          </p>
          <p>
            <b>Chapter: </b>
            {stand.chapter.join(', ')}
          </p>
          <p className={styles.battlecry}>
            <b>Battlecry: </b>
            {stand.battlecry}
          </p>
        </div>
      </div>
    </>
  );
};

export default StandItem;
