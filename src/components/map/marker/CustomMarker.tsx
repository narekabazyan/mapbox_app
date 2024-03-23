import React, { JSX } from 'react';
import styles from './CustomMarker.module.scss';
import classNames from 'classnames';

interface CustomMarkerProps {
  sequenceNumber: number;
  filled: boolean;
}

function CustomMarker({
  sequenceNumber,
  filled,
}: CustomMarkerProps): JSX.Element {
  return (
    <div className={styles.marker}>
      <div className={classNames(styles.markerImg, { [styles.fill]: filled })}>
        <span className={styles.markerNumber}>{sequenceNumber}</span>
      </div>
      <span className={styles.markerCircle} />
    </div>
  );
}

export default CustomMarker;
