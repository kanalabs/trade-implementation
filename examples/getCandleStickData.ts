import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const apiUrl = process.env.API_URL || '';
export async function getCandleStickData(environment: string,resolution:number,marketId:number) {
  try {
    if (!environment) {
      throw new Error('Missing environment parameter');
    }

    const responseCandleStickData = await axios.get(
      `${apiUrl}/getCandleStickData/?environment=${environment}&resolution=${resolution}&marketId=${marketId}`
    );

    const candleStickData = responseCandleStickData.data.resolutions;
    console.log("candleStickData", candleStickData);

    return candleStickData;
  } catch (error: any) {
    throw new Error(`Failed to fetch candlestick data: ${error.message}`);
  }
}

getCandleStickData('mainnet',900,3);
