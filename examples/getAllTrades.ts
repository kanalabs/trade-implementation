import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const apiUrl = process.env.API_URL || '';

export async function getAllTrades(environment: string,marketId:number) {
  try {
  const response = await axios.get(
      `${apiUrl}/getAllTrades/?environment=${environment}&marketId=${marketId}`
    );
    const getAllTrades = response.data.getAllTrades;
    console.log("getAllTrades",getAllTrades)

    return getAllTrades;
  } catch (error:any) {
    throw new Error(`Failed to get ALl Trades: ${error.message}`);
  }
}
getAllTrades('mainnet',7)