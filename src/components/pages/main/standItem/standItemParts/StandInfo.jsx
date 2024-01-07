import React, { useEffect } from 'react';
import styles from '../standItem.module.css';
import { createGraph } from '../createGraph';

const StandInfo = ({ stand }) => {
  useEffect(() => {
    if (stand?.id && stand?.stats) {
      createGraph(stand.stats);
    }
  }, [stand]);

  return (
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
  );
};

export default StandInfo;
