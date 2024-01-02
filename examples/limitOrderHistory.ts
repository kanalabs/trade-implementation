import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const apiUrl = process.env.API_URL || '';


export async function limitOrderHistory(environment: string, marketId:number,address:string) {
  try {
  const response = await axios.get(
      `${apiUrl}/limitOrderHistory/?environment=${environment}&marketId=${marketId}&address=${address}`);
  
    const orderHistoryLimit = response.data.orderHistoryLimit;
    console.log("orderHistoryLimit",orderHistoryLimit)

    return orderHistoryLimit;
  } catch (error:any) {
    throw new Error(`Failed to fetch limit OrderHistory: ${error.message}`);
  }
}
limitOrderHistory('mainnet',7,"0xf285dbca58bf2791fcb227fec9df9736ab61605e10a52f104b77eb0529daa5c9")