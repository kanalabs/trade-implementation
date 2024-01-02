import { AptosAccount, AptosClient } from 'aptos';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();
const apiUrl = process.env.API_URL || '';
const client = new AptosClient(process.env.APTOS_CLIENT_URL|| '');
const account = AptosAccount.fromAptosAccountObject({
  address: process.env.APTOS_ADDRESS || '', 
  publicKeyHex: process.env.APTOS_PUBLICKEY || '', 
  privateKeyHex: process.env.APTOS_PRIVATEKEY as any || '', 
});
export async function placeLimitBuyOrder(environment: string, marketId:number,amount:number,price:number,address:string) {
  try {
  const response = await axios.get(
      `${apiUrl}/placeLimitBuyOrder/?environment=${environment}&marketId=${marketId}&amount=${amount}&price=${price}&address=${address}`);
  
    const buyOrderPayload = response.data.buyOrderPayload;
    console.log("buyorderPayload",buyOrderPayload)
    const transaction = await client.generateTransaction(account.address(), buyOrderPayload);
    console.log("transaction",transaction)
    const simulate = await client.simulateTransaction(account, transaction);
    console.log("simulate",simulate)
    const status = simulate[0].success;
    console.log("status",status)
    const sign = await client.signTransaction(account, transaction);
    console.log("sign",sign)
    const submit = await client.submitTransaction(sign);
    console.log("submit",submit)
    await client.waitForTransaction(submit.hash);
   

    return submit;
  } catch (error:any) {
    throw new Error(`Failed to place Limit Buy Order: ${error.message}`);
  }
}
placeLimitBuyOrder('mainnet',7,1,4,"0xf285dbca58bf2791fcb227fec9df9736ab61605e10a52f104b77eb0529daa5c9")
