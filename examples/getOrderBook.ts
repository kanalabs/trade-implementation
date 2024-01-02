import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const apiUrl = process.env.API_URL || '';

export async function getOrderBook(environment: string,marketId:number) {
  try {
    if (!environment) {
      throw new Error('Missing environment parameter');
    }

    const responseOrderBook = await axios.get(
      `${apiUrl}/getOrderBook/?environment=${environment}&marketId=${marketId}`
    
    );

    const getOrderBook = responseOrderBook.data.getOrderBook;
    console.log("orderBook", getOrderBook);

    return getOrderBook;
  } catch (error: any) {
    throw new Error(`Failed to fetch order book: ${error.message}`);
  }
}

 getOrderBook('mainnet',7)
