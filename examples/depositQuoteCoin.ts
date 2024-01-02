import axios from 'axios';
import { AptosAccount, AptosClient } from 'aptos';
import dotenv from 'dotenv';

dotenv.config();
const apiUrl = process.env.API_URL || '';

const client = new AptosClient(process.env.APTOS_CLIENT_URL || '');
const account = AptosAccount.fromAptosAccountObject({
  address: process.env.APTOS_ADDRESS || '', 
  publicKeyHex: process.env.APTOS_PUBLICKEY || '', 
  privateKeyHex: process.env.APTOS_PRIVATEKEY as any || '', 
});
export async function depositQuoteCoin(environment: string,marketId:number, amount:string,address:string) {
  try {
  const response = await axios.get(
      `${apiUrl}/depositQuoteCoin/?environment=${environment}&marketId=${marketId}&amount=${amount}&address=${address}`);
  
   const quoteCoinDepositPayload = response.data.quoteCoinDepositPayload
   console.log("depositQuoteCoinpayload",quoteCoinDepositPayload)
   const quoteCoinTransaction = await client.generateTransaction(account.address(), quoteCoinDepositPayload);
        const quoteCoinSign = await client.signTransaction(account, quoteCoinTransaction);
        const quoteCoinSubmit = await client.submitTransaction(quoteCoinSign);
        console.log("quoteCoinSubmit",quoteCoinSubmit)
        await client.waitForTransaction(quoteCoinSubmit.hash);

    return quoteCoinSubmit;
  } catch (error:any) {
    throw new Error(`Failed to Deposit Quote Coin: ${error.message}`);
  }
}
depositQuoteCoin('mainnet', 7,"100","0xf285dbca58bf2791fcb227fec9df9736ab61605e10a52f104b77eb0529daa5c9")