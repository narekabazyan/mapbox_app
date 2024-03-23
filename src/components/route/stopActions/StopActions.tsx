import classNames from 'classnames';
import React from 'react';
import { StopWithCompleted } from '../../../types/stop';
import styles from './StopActions.module.scss';

interface StopActionsProps {
  stop: StopWithCompleted;
  currentStop: StopWithCompleted | null;
  setStopCompleted: (stop: StopWithCompleted) => void;
}

function StopActions({
  setStopCompleted,
  stop,
  currentStop,
}: StopActionsProps) {
  const handleCompleteClick = (stop: StopWithCompleted) => {
    setStopCompleted(stop);
  };

  const getNavigationUrl = (
    stop: StopWithCompleted,
    currentStop: StopWithCompleted | null
  ): string => {
    if (!currentStop) {
      // Should get current location from browser or set default location
      return `https://www.google.com/maps/dir/?api=1&origin=51.44118,5.489113&destination=${stop.lat},${stop.lng}&travelmode=driving`;
    }

    return `https://www.google.com/maps/dir/?api=1&origin=${currentStop.lat},${currentStop.lng}&destination=${stop.lat},${stop.lng}&travelmode=driving`;
  };

  return (
    <div className={styles.routeActions}>
      <a
        href={getNavigationUrl(stop, currentStop)}
        target="_blank"
        className={styles.routeNavigate}
      >
        <i className="icon-navigate" />
      </a>
      <button
        onClick={() => handleCompleteClick(stop)}
        className={styles.completeButton}
      >
        <i className={classNames('icon-complete', styles.completeIcon)} />
        <span className={styles.completeButtonText}>Complete</span>
      </button>
    </div>
  );
}

export default StopActions;
