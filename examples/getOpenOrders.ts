import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const apiUrl = process.env.API_URL || '';

export async function getOpenOrders(environment: string, marketId: number, address: string, orderType: any) {
  try {
    const response = await axios.get(
      `${apiUrl}/getOpenOrders?environment=${environment}&marketId=${marketId}&address=${address}&orderType=${orderType}`,
    );

    const openOrders = response.data.openOrders;
    console.log('openOrders', openOrders);

    return openOrders;
  } catch (error: any) {
    throw new Error(`Failed to fetch Open Orders: ${error.message}`);
  }
}
getOpenOrders('mainnet', 7, '0xf285dbca58bf2791fcb227fec9df9736ab61605e10a52f104b77eb0529daa5c9', 'canceled');
