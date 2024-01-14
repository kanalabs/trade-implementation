import { config } from "dotenv";
import {
  cancelAllOrdersApi,
  cancelOrdersApi,
  openOrdersApi,
} from "../requests";
import { Types } from "aptos";
import { SELL, account, aptosClient } from "../constants";
config({ path: ".env" });

const marketId = 7; // APT / LZUSDC market

const cancelAllOrders = async () => {
  const payload = (await cancelAllOrdersApi(
    marketId
  )) as Types.EntryFunctionPayload;
  console.log("🚀 ~ cancelAllOrders ~ payload:", payload);
  const transaction = await aptosClient.generateTransaction(
    account.address(),
    payload
  );
  const sign = await aptosClient.signTransaction(account, transaction);
  const submit = await aptosClient.submitTransaction(sign);
  await aptosClient.waitForTransaction(submit.hash);
  console.log("TX HASH", submit.hash);
};

cancelAllOrders();

const cancelOrders = async () => {
  //you can get the list open order using openOrderApi
  const openOrders = await openOrdersApi(
    marketId,
    account.address().toString(),
    "open"
  );
  const sellOrder = openOrders.asks[0].marketOrderId; 
  
  const payload = await cancelOrdersApi(marketId, SELL, sellOrder);
  const transaction = await aptosClient.generateTransaction(
    account.address(),
    payload
  );
  const sign = await aptosClient.signTransaction(account, transaction);
  const submit = await aptosClient.submitTransaction(sign);
  await aptosClient.waitForTransaction(submit.hash);
  console.log("TX HASH", submit.hash);
};

cancelOrders();
