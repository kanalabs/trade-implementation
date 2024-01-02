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

export async function depositBaseCoin(environment: string, marketId: number, amount: string, address: string) {
  try {
    // Step 1: Make the initial API call to get the deposit payload
    const responseAvailable = await axios.get(
      `${apiUrl}/depositBaseCoin/?environment=${environment}&marketId=${marketId}&amount=${amount}&address=${address}`
    );

    const depositPayload = responseAvailable.data.depositPayload;
    console.log("depositPayload", depositPayload);

    // Step 2: Generate the transaction
    const depositTransaction = await client.generateTransaction(account.address(), depositPayload);

    // Step 3: Sign the transaction
    const depositSign = await client.signTransaction(account, depositTransaction);
    console.log("depositSign", depositSign);

    // Step 4: Submit the transaction
    const depositSubmit = await client.submitTransaction(depositSign);
    console.log("depositSubmit", depositSubmit);

    // Step 5: Wait for the transaction to be mined
    await client.waitForTransaction(depositSubmit.hash);

    // Step 6: Return the final response
    return depositSubmit;
  } catch (error: any) {
    throw new Error(`Failed to Deposit Quote Coin: ${error.message}`);
  }
}

// Example usage:

depositBaseCoin(
  'mainnet', 7,"100","0xf285dbca58bf2791fcb227fec9df9736ab61605e10a52f104b77eb0529daa5c9");
