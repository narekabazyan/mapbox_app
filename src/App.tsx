import React, { JSX, Suspense, useEffect, useState } from 'react';
import './assets/scss/index.scss';
import stop_list from './assets/json/stop_list.json';
import { Stop, StopWithCompleted } from './types/stop';
import { DisplayEnum } from './enums/displayEnum';
import Navigation from './components/layout/navigation/Navigation';
import MapView from './components/map/mapView/MapView';

const StopList = React.lazy(
  () => import('./components/route/stopList/StopList')
);

function App(): JSX.Element {
  const [currentDisplay, setCurrentDisplay] = useState<DisplayEnum>(
    DisplayEnum.Route
  );
  const [stops, setStops] = useState<StopWithCompleted[]>([]);
  const [currentDestination, setCurrentDestination] =
    useState<StopWithCompleted | null>(null);
  const [currentStop, setCurrentStop] = useState<StopWithCompleted | null>(
    null
  );

  const initStopsWithCompleted = () => {
    const stopsWithCompleted: StopWithCompleted[] = stop_list.map(
      (stop: Stop): StopWithCompleted => {
        return { ...stop, completed: false };
      }
    );
    setCurrentDestination(stopsWithCompleted[0]);
    setStops(stopsWithCompleted);
  };

  const setStopCompleted = (stop: StopWithCompleted) => {
    const newStops: StopWithCompleted[] = [...stops];
    const index = newStops.findIndex(
      (item) => item.sequence_number === stop.sequence_number
    );
    newStops[index].completed = true;

    setCurrentStop(stop);
    setCurrentDestination(stops[index + 1] || null);
    setStops(newStops);
  };

  useEffect(initStopsWithCompleted, [stop_list]);

  return (
    <div className="mainWrapper">
      <section className="section">
        {currentDisplay === DisplayEnum.Route && (
          <Suspense fallback={null}>
            <StopList
              stops={stops}
              currentDestination={currentDestination}
              currentStop={currentStop}
              setStopCompleted={setStopCompleted}
            />
          </Suspense>
        )}
        {currentDisplay === DisplayEnum.Map && (
          <Suspense fallback={null}>
            <MapView stops={stops} />
          </Suspense>
        )}
      </section>
      <Navigation
        currentDisplay={currentDisplay}
        setCurrentDisplay={setCurrentDisplay}
      />
    </div>
  );
}

export default App;
