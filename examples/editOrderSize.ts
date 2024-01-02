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
export async function editOrderSize(environment: string, marketId:number,newSize:number,side:Boolean,address:string,orderId:string) {
  try {
  const response = await axios.get(
      `${apiUrl}/editOrderSize/?environment=${environment}&marketId=${marketId}&newSize=${newSize}&address=${address}&side=${side}&orderId=${orderId}`);
  
    const editOrderSize = response.data.editOrderSize;
    console.log("editOrderSize",editOrderSize)
    const transaction = await client.generateTransaction(account.address(), editOrderSize);
    const sign = await client.signTransaction(account, transaction);
    const submit = await client.submitTransaction(sign);
    console.log("submit",submit)
    await client.waitForTransaction(submit.hash)
   

    return submit;
  } catch (error:any) {
    throw new Error(`Failed to place Limit Buy Order: ${error.message}`);
  }
}
editOrderSize('mainnet', 7,1,true,"0xf285dbca58bf2791fcb227fec9df9736ab61605e10a52f104b77eb0529daa5c9","U128")
