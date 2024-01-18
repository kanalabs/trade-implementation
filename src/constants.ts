import { AptosAccount, AptosClient } from "aptos";
import { config } from "dotenv";
config({ path: ".env" });

if (!process.env.APTOS_RPC) throw new Error("Aptos Rpc not found in the env");
export const aptosClient = new AptosClient(process.env.APTOS_RPC);

export const account = AptosAccount.fromAptosAccountObject({
    address: process.env.APTOS_ADDRESS || '',
    publicKeyHex: process.env.APTOS_PUBLICKEY || '',
    privateKeyHex: process.env.APTOS_PRIVATEKEY || '',
});

export const allTrades = "/allTrades";
export const availableMarkets = "/availableMarket";
export const cancelAllOrder = "/cancelAllOrder";
export const cancelOrder = "/cancelOrder";
export const changeOrderSize = "/changeOrderSize";
export const estimatedPrice = "/estimatePrice";
export const limitOrder = "/limitOrder";
export const marketOrder = "/marketOrder";
export const marketPrice = "/marketPrice";
export const orderBook = "/orderBook";
export const orderHistory = "/orderHistory";
export const pairInfo = "/pairInfo";
export const registerMarket = "/registeredMarkets";
export const openOrder = "/openOrders";
export const deposit = "/deposit";
export const withdraw = "/withdraw";
export const marketAccountInfo = "/marketAccountInfo";

export const SELL = true;
export const BUY = false;


