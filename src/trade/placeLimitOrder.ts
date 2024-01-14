import { config } from "dotenv";
import { limitOrderApi } from "../requests";
import { BUY, account, aptosClient } from "../constants";
import { Types } from "aptos";
config({ path: ".env" });

const marketId = 7; // APT / LZUSDC market
const amount = "50000000";
const price = "5000000";

const main = async () => {
  const limitOrderPayload = (await limitOrderApi(
    marketId,
    amount,
    price,
    BUY
  )) as Types.EntryFunctionPayload;
  const transaction = await aptosClient.generateTransaction(
    account.address(),
    limitOrderPayload
  );
  const sign = await aptosClient.signTransaction(account, transaction);
  const submit = await aptosClient.submitTransaction(sign);
  await aptosClient.waitForTransaction(submit.hash);
  console.log("TX HASH", submit.hash)
};

main();
