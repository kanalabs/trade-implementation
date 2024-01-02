import axios from 'axios';
import { AptosAccount, AptosClient } from 'aptos';
import dotenv from 'dotenv';

dotenv.config();
const apiUrl = process.env.API_URL || '';
const client = new AptosClient(process.env.APTOS_CLIENT_URL|| '');
const account = AptosAccount.fromAptosAccountObject({
  address: process.env.APTOS_ADDRESS || '', 
  publicKeyHex: process.env.APTOS_PUBLICKEY || '', 
  privateKeyHex: process.env.APTOS_PRIVATEKEY as any || '', 
});
export async function placeLimitSellOrder(environment: string, marketId:number,amount:number,price:number,address:string) {
  try {
  const response = await axios.get(
      `${apiUrl}/placeLimitSellOrder/?environment=${environment}&marketId=${marketId}&amount=${amount}&price=${price}&address=${address}`);
  
    const sellOrderPayload = response.data.sellOrderPayload;
    console.log("depositSubmit",sellOrderPayload)
    const transaction = await client.generateTransaction(account.address(), sellOrderPayload);
                const simulate = await client.simulateTransaction(account, transaction);
                const status = simulate[0].success;
                console.log("status",status)
                const sign = await client.signTransaction(account, transaction);
                const submit = await client.submitTransaction(sign);
                console.log("submit",submit)
                await client.waitForTransaction(submit.hash);

    return submit;
  } catch (error:any) {
    throw new Error(`Failed to place Limit Sell Order: ${error.message}`);
  }
}
placeLimitSellOrder('mainnet',7,0.5,4,"0xf285dbca58bf2791fcb227fec9df9736ab61605e10a52f104b77eb0529daa5c9")