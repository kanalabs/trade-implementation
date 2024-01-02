import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const apiUrl = process.env.API_URL || '';

export async function getRegisteredMarkets(environment: string) {
  try {
  
    const response = await axios.get(`$http://localhost:3000/getRegisteredMarkets?environment=${environment}`);
    
   
    const registeredMarkets = response.data.registeredMarkets;
    console.log("registeredMarkets",registeredMarkets)
    
    return registeredMarkets;
  } catch (error: any) {
 
    throw new Error(`Failed to fetch registered markets: ${error.message}`);
  }
}
getRegisteredMarkets('mainnet')