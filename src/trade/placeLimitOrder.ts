import { config } from "dotenv";
import { limitOrderApi } from "../requests";
import { BUY,SELL, account, aptosClient } from "../constants";
import { Types } from "aptos";
import { generateDecimalWithZeros } from "../utils";
config({ path: ".env" });

const marketId = 7; // APT / LZUSDC market

const amount = `1`;
const price = `5`;


const main = async () => {

  const limitOrderPayload = (await limitOrderApi(
    marketId,
    amount,
    price,
    BUY
  )) as Types.EntryFunctionPayload;

  const transaction = await aptosClient.generateTransaction(
    account.address(),
    limitOrderPayload,{gas_unit_price : `100` , max_gas_amount : '4000'}
  );
  const sign = await aptosClient.signTransaction(account, transaction);
  const submit = await aptosClient.submitTransaction(sign);
  await aptosClient.waitForTransaction(submit.hash);
  console.log("TX HASH", submit.hash)
};

main();
