import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiUrl = process.env.API_URL || '';
export async function getUserMarketAccount(environment: string,marketId:number,address:string) {
  try {
  const response = await axios.get(
      `${apiUrl}/getUserMarket/?environment=${environment}&marketId=${marketId}&address=${address}`
    );
    const marketInfo =response.data.marketInfo;
    console.log("marketInfo",marketInfo)

    return marketInfo;
  } catch (error:any) {
    throw new Error(`Failed to fetch User Market Data: ${error.message}`);
  }
}
getUserMarketAccount('mainnet',7,"0xf285dbca58bf2791fcb227fec9df9736ab61605e10a52f104b77eb0529daa5c9")