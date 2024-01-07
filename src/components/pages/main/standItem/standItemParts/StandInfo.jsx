import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStandToFavorite, removeStandFromFavorite } from '../../../../../store/actions';
import styles from '../standItem.module.css';
import { createGraph } from '../createGraph';
import like from '../../standCard/like.svg';
import liked from '../../standCard/liked.svg';

const StandInfo = ({ stand, standFavorite, setStandFavorite }) => {
  const dispatch = useDispatch();

  const dispatchFavoriteStand = () => {
    if (standFavorite) {
      dispatch(removeStandFromFavorite(stand.id));
      setStandFavorite(false);
    } else {
      dispatch(
        setStandToFavorite({
          [stand.id]: { name: stand.name, stand_images: stand.stand_images },
        }),
      );
      setStandFavorite(true);
    }
  };

  useEffect(() => {
    if (stand?.id && stand?.stats) {
      createGraph(stand.stats);
    }
  }, [stand]);

  return (
    <div className={styles.standInfo}>
      <div className={styles.heart}>
        <img src={standFavorite ? liked : like} alt="heart" onClick={dispatchFavoriteStand} />
        <h2 className={styles.standName}>{stand.name}</h2>
      </div>
      <canvas id="stats" width="300" height="300"></canvas>
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
  );
};

export default StandInfo;
