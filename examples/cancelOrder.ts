import axios from 'axios';
import { AptosAccount, AptosClient } from 'aptos';
import dotenv from 'dotenv';

dotenv.config();

const client = new AptosClient(process.env.APTOS_CLIENT_URL|| '');
const account = AptosAccount.fromAptosAccountObject({
  address: process.env.APTOS_ADDRESS || '', 
  publicKeyHex: process.env.APTOS_PUBLICKEY || '', 
  privateKeyHex: process.env.APTOS_PRIVATEKEY as any || '', 
});

const apiUrl = process.env.API_URL || '';

export async function cancelOrder(environment: string, marketId:number,address:string,side:boolean,orderId:string) {
  try {
  const response = await axios.get(
      `${apiUrl}/cancelOrder/?environment=${environment}&marketId=${marketId}&address=${address}&side=${side}&orderId=${orderId}`);
  
 const closeOrder=response.data.closeOrder;
 console.log("closeOrder",closeOrder)
 const transaction = await client.generateTransaction(account.address(), closeOrder);
                const sign = await client.signTransaction(account, transaction);
                const submit = await client.submitTransaction(sign);
                console.log("submit",submit)

    return submit;
  } catch (error:any) {
    throw new Error(`Failed to Cancel Order: ${error.message}`);
  }
}
cancelOrder('mainnet', 7,"0xf285dbca58bf2791fcb227fec9df9736ab61605e10a52f104b77eb0529daa5c9",true,"U128")