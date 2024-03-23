import classNames from 'classnames';
import React, { JSX, Suspense } from 'react';
import { StopWithCompleted } from '../../../types/stop';
import styles from './StopItem.module.scss';
const StopActions = React.lazy(() => import('../stopActions/StopActions'));

interface StopItemProps {
  stop: StopWithCompleted;
  destination: StopWithCompleted | null;
  currentStop: StopWithCompleted | null;
  setStopCompleted: (stop: StopWithCompleted) => void;
}

function StopItem({
  stop,
  destination,
  currentStop,
  setStopCompleted,
}: StopItemProps): JSX.Element {
  const isActive: boolean = destination
    ? stop.sequence_number === destination.sequence_number
    : false;

  const isCompleted: boolean = stop.completed;

  return (
    <div
      className={classNames(styles.routeRow, {
        [styles.active]: isActive,
        [styles.completed]: isCompleted,
      })}
    >
      <div className={styles.routeItem}>
        <div className={classNames(styles.routeItemInfoColumn, styles.fill)}>
          <div className={styles.routeItemInfoHead}>
            <span className={styles.routeItemNum}>{stop.sequence_number}</span>
            <p className={styles.routeItemTitle}>{stop.street}</p>
          </div>
          <address className={styles.routeItemAddress}>
            {stop.zip} {stop.city}
          </address>
        </div>
        <div className={classNames(styles.routeItemInfoColumn, styles.auto)}>
          <div className={styles.routeItemInfoHead}>
            {isCompleted && (
              <i className={classNames('icon-complete', styles.completeIcon)} />
            )}
            <p className={styles.routeItemTitle}>{stop.eta}</p>
          </div>
          <p className={styles.routeItemTime}>{stop.time_window}</p>
        </div>
      </div>
      {isActive && (
        <Suspense fallback={null}>
          <StopActions
            stop={stop}
            currentStop={currentStop}
            setStopCompleted={setStopCompleted}
          />
        </Suspense>
      )}
    </div>
  );
}

export default StopItem;
