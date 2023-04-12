import {React, useState} from 'react';
import { getBusByName, getBusStopByName } from './api.js';

function BusInfo(){
  const [busName, setBusName] = useState('');
  const [busData, setBusData] = useState(null);
  const [busStopData, setBusStopData] = useState(null);

  async function handleGetBusData() {
    try {
      const data = await getBusByName(busName);
      setBusData(data);
    } catch (error) {
      console.error('Error fetching bus data:', error.message);
    }
  }

  async function handleGetBusStopData() {
    try {
      const data = await getBusStopByName(busName);
      setBusStopData(data);
    } catch (error) {
      console.error('Error fetching bus stop data:', error.message);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={busName}
        onChange={(e) => setBusName(e.target.value)}
        placeholder="Enter bus name"
      />
      <button onClick={handleGetBusData}>Get Bus Info</button>
      <button onClick={handleGetBusStopData}>Get Bus Stop Info</button>
      {busData && <div>{JSON.stringify(busData)}</div>}
      {busStopData && <div>{JSON.stringify(busStopData)}</div>}
    </div>
  );

}


export default BusInfo;