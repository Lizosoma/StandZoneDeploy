import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { StandsService } from '../../../../services/card.service';
import styles from './standItem.module.css';
import StandInfo from './standItemParts/StandInfo';
import StandPictures from './standItemParts/StandPictures';
import UserPictures from './standItemParts/UserPictures';

const StandItem = () => {
  const { id } = useParams();
  const [stand, setStand] = useState({});

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

  if (!stand?.id) {
    return <div>Stand not found</div>;
  }

  return (
    <>
      <Link className={styles.back} to={'/'}>
        {' '}
        ← Back
      </Link>
      <div className={styles.standContainer}>
        <div className={styles.images}>
          <StandPictures stand={stand} />
          <UserPictures stand={stand} />
        </div>
        <StandInfo stand={stand} />
      </div>
    </>
  );
};

export default StandItem;
