import { config } from "dotenv";
import {
  depositApi,
  marketAccountInfoApi,
  withdrawApi,
} from "../requests";
import {account, aptosClient } from "../constants";
import { Types } from "aptos";
config({ path: ".env" });

const marketId = 7; // APT / LZUSDC market
const amount = "50000000";

const deposit = async () => {
  const depositPayload = (await depositApi(
    marketId,
    amount,
    "base"
  )) as Types.EntryFunctionPayload;
  const transaction = await aptosClient.generateTransaction(
    account.address(),
    depositPayload
  );
  const sign = await aptosClient.signTransaction(account, transaction);
  const submit = await aptosClient.submitTransaction(sign);
  await aptosClient.waitForTransaction(submit.hash);
  console.log("TX HASH", submit.hash);
};

deposit();

const withdraw = async () => {
  const withdrawPayload = (await withdrawApi(
    marketId,
    amount,
    "base"
  )) as Types.EntryFunctionPayload;
  const transaction = await aptosClient.generateTransaction(
    account.address(),
    withdrawPayload
  );
  const sign = await aptosClient.signTransaction(account, transaction);
  const submit = await aptosClient.submitTransaction(sign);
  await aptosClient.waitForTransaction(submit.hash);
  console.log("TX HASH", submit.hash);
};

withdraw();

const getMarketAccountInfo = async () => {
  const accountInfo = await marketAccountInfoApi(
    marketId,
    account.address().toString()
  );
  console.log("market account info", accountInfo);
};
getMarketAccountInfo();
