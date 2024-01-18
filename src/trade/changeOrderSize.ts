import { config } from "dotenv";
import {
  changeOrderSizeApi,
  openOrdersApi,
} from "../requests";
import { SELL,BUY, account, aptosClient } from "../constants";
config({ path: ".env" });

const marketId = 7; // APT / LZUSDC market

const changeOrderSize = async () => {
  // you can get the list open order using openOrderApi
  const openOrders = await openOrdersApi(
    marketId,
    account.address().toString(),
    "open"
  );
  console.log("🚀 ~ changeOrderSize ~ openOrders:", openOrders)
  const sellOrderId = openOrders.bids[0].marketOrderId;
  console.log("🚀 ~ changeOrderSize ~ sellOrderId:", sellOrderId.value)

  const payload = await changeOrderSizeApi(
    marketId,
    BUY,
    sellOrderId.value,
    "0.9"
  );
  const transaction = await aptosClient.generateTransaction(
    account.address(),
    payload,
    {gas_unit_price : `100` , max_gas_amount : '4000'}
  );
  const sign = await aptosClient.signTransaction(account, transaction);
  const submit = await aptosClient.submitTransaction(sign);
  await aptosClient.waitForTransaction(submit.hash);
  console.log("TX HASH", submit.hash);
};

changeOrderSize();
