import { config } from "dotenv";
import { marketOrderApi } from "../requests";
import { BUY, account, aptosClient } from "../constants";
import { Types } from "aptos";
config({ path: ".env" });

const marketId = 7; // APT / LZUSDC market
const amount = "1";

const main = async () => {
  const marketOrderPayload = (await marketOrderApi(
    marketId,
    amount,
    BUY
  )) as Types.EntryFunctionPayload;
  console.log("🚀 ~ main ~ marketOrderPayload:", marketOrderPayload)
  const transaction = await aptosClient.generateTransaction(
    account.address(),
    marketOrderPayload
  );
  const sign = await aptosClient.signTransaction(account, transaction);
  const submit = await aptosClient.submitTransaction(sign);
  await aptosClient.waitForTransaction(submit.hash);
  console.log("TX HASH", submit.hash)

};

main();
