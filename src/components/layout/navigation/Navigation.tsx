import React, { JSX } from 'react';
import { DisplayEnum } from '../../../enums/displayEnum';
import styles from './Navigation.module.scss';
import classNames from 'classnames';

interface NavigationProps {
  currentDisplay: DisplayEnum;
  setCurrentDisplay: (display: DisplayEnum) => void;
}

function Navigation({
  currentDisplay,
  setCurrentDisplay,
}: NavigationProps): JSX.Element {
  const handleDisplayChange = (
    event: React.MouseEvent<HTMLAnchorElement>,
    display: DisplayEnum
  ) => {
    event.preventDefault();
    setCurrentDisplay(display);
  };

  return (
    <nav className={styles.navigation}>
      <a
        href="/"
        onClick={(e) => handleDisplayChange(e, DisplayEnum.Route)}
        className={classNames(styles.navigationColumn, {
          [styles.active]: currentDisplay === DisplayEnum.Route,
        })}
      >
        <i className={classNames('icon-route', styles.navigationIcon)} />
        <span className={styles.navigationName}>{DisplayEnum.Route}</span>
      </a>
      <a
        href="/"
        onClick={(e) => handleDisplayChange(e, DisplayEnum.Map)}
        className={classNames(styles.navigationColumn, {
          [styles.active]: currentDisplay === DisplayEnum.Map,
        })}
      >
        <i className={classNames('icon-map', styles.navigationIcon)} />
        <span className={styles.navigationName}>{DisplayEnum.Map}</span>
      </a>
    </nav>
  );
}

export default Navigation;
