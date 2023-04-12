const API_BASE_URL = 'http://localhost:5001';

export async function getBusByName(busName) {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/bus/${busName}`);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || 'An error occurred while fetching the bus data.');
    }
  } catch (error) {
    console.error('Error fetching bus data:', error.message);
    throw error;
  }
}


export async function getBusStopByName(busName) {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/bus/bus_stop/${busName}`);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || 'An error occurred while fetching the bus stop data.');
    }
  } catch (error) {
    console.error('Error fetching bus stop data:', error.message);
    throw error;
  }
}