import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiUrl = process.env.API_URL || '';


export async function userOrderHistory(environment: string, marketId:number,address:string) {
  try {
  const response = await axios.get(
      `${apiUrl}/userOrderHistory/?environment=${environment}&marketId=${marketId}&address=${address}`);
  
    const userOrderHistory = response.data.userOrderHistory
    console.log("openOrders",userOrderHistory)

    return userOrderHistory;
  } catch (error:any) {
    throw new Error(`Failed to fetch User  Order History: ${error.message}`);
  }
}
userOrderHistory('mainnet',7,"0xf285dbca58bf2791fcb227fec9df9736ab61605e10a52f104b77eb0529daa5c9")