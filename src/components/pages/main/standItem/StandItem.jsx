import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import StandCard from '../standCard/StandCard';
import { StandsService } from '../../../../services/card.service';

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
    <div>
      <Link to={'/'}>Back</Link>
      <StandCard stand={stand} />;
    </div>
  );
};

export default StandItem;
