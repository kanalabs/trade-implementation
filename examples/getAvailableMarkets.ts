import axios from 'axios';

import dotenv from 'dotenv';

dotenv.config();
const apiUrl = process.env.API_URL || '';

export async function getAvailableMarkets(environment: string) {
  try {
  const responseAvailable = await axios.get(
      `${apiUrl}/getAvailableMarkets/?environment=${environment}`
    );
    const availableMarkets = responseAvailable.data.availableMarkets;
    console.log("availableMarkets",availableMarkets)

    return availableMarkets;
  } catch (error:any) {
    throw new Error(`Failed to fetch available markets: ${error.message}`);
  }
}
getAvailableMarkets('mainnet')