import React from 'react';
import styles from './historyItem.module.css';

const HistoryItem = ({ item }) => {
  const { params, count } = item;
  return (
    <div className={styles.historyItem}>
      <p className={styles.title}>Found {count} stands</p>
      <div className={styles.historyItems}>
        {Object.entries(params).map(([key, value]) => {
          if (value !== '' && value !== 'all') {
            return (
              <div key={key} className={styles.item}>
                {value}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default HistoryItem;
