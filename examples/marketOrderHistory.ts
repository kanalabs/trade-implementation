import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const apiUrl = process.env.API_URL || '';

export async function marketOrderHistory(environment: string, marketId:number,address:string) {
  try {
  const response = await axios.get(
      `${apiUrl}/marketOrderHistory/?environment=${environment}&marketId=${marketId}&address=${address}`);
  
    const orderHistoryMarket = response.data.orderHistoryMarket;
    console.log("orderHistoryMarket",orderHistoryMarket)

    return orderHistoryMarket;
  } catch (error:any) {
    throw new Error(`Failed to fetch market Order History: ${error.message}`);
  }
}
marketOrderHistory('mainnet',7,"0xf285dbca58bf2791fcb227fec9df9736ab61605e10a52f104b77eb0529daa5c9")