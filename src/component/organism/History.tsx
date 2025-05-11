import {GeneralContext} from '@Maplify/context';
import {useContext, useEffect, useMemo} from 'react';
import {Dropdown} from '../molecule';

const History = () => {
  const {history, setSelectedPlace, selectedPlace, getHistory} =
    useContext(GeneralContext);

  useEffect(() => {
    getHistory();
  }, [getHistory]);

  const historyData = useMemo(
    () =>
      history.map((item, index) => ({
        label: item.name,
        value: index,
      })),
    [history],
  );
  return (
    <Dropdown
      data={historyData}
      value={selectedPlace.selectedPlaceIndex}
      onChange={setSelectedPlace}
    />
  );
};

export default History;
