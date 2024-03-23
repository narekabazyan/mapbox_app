import React, { JSX } from 'react';
import { StopWithCompleted } from '../../../types/stop';
import styles from './StopList.module.scss';
import StopItem from '../stopItem/StopItem';

interface StopListProps {
  stops: StopWithCompleted[];
  currentDestination: StopWithCompleted | null;
  currentStop: StopWithCompleted | null;
  setStopCompleted: (stop: StopWithCompleted) => void;
}

function StopList({
  stops,
  currentDestination,
  currentStop,
  setStopCompleted,
}: StopListProps): JSX.Element {
  return (
    <div className={styles.routeListContainer}>
      {stops.map((stopItem: StopWithCompleted) => {
        return (
          <StopItem
            key={stopItem.sequence_number}
            stop={stopItem}
            currentStop={currentStop}
            destination={currentDestination}
            setStopCompleted={setStopCompleted}
          />
        );
      })}
    </div>
  );
}

export default StopList;
