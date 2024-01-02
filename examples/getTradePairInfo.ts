import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const apiUrl = process.env.API_URL || '';

export async function getTradePairInfo(environment: string,marketId:number) {
  try {
    const responseTradePair = await axios.get(
      `${apiUrl}/getTradePairInfo/?environment=${environment}&marketId=${marketId}`
    );

    const tradePairInfo = responseTradePair.data.tradePairInfo;
    console.log("tradePairInfo", tradePairInfo);

    return tradePairInfo;
  } catch (error: any) {
    throw new Error(`Failed to fetch trade pair information: ${error.message}`);
  }
}
getTradePairInfo('mainnet',7)
