import axios, { AxiosError, AxiosResponse } from "axios";
import {
  allTrades,
  availableMarkets,
  cancelAllOrder,
  cancelOrder,
  changeOrderSize,
  deposit,
  limitOrder,
  marketAccountInfo,
  marketOrder,
  marketPrice,
  openOrder,
  orderBook,
  orderHistory,
  pairInfo,
  registerMarket,
  withdraw,
} from "./constants";
import { config } from "dotenv";
config({ path: ".env" });

if (!process.env.API_ENDPOINT) throw new Error("API_ENDPOINT is not defined");

const axiosGetRequest = async (route: string, params?: any) => {
  try {
    if (!process.env.API_KEY) throw new Error("API_KEY is not defined");
    const response: AxiosResponse = await axios.get(
      `${process.env.API_ENDPOINT}${route}`,
      {
        params,
        headers: {
          "x-api-key": process.env.API_KEY,
        },
      }
    );
    return response.data as { status: any; data: any };
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.code === "ECONNREFUSED")
      throw new Error("Server nreachable [ ECONNREFUSED ]");
    if (axiosError.response) {
      // The request was made, but the server responded with an error status
      throw new Error((axiosError.response.data as any).error);
    } else {
      // Something else happened while setting up the request
      throw new Error(axiosError.message as string);
    }
  }
};

export const getAllTradesApi = async (marketId: number) => {
  const response = await axiosGetRequest(allTrades, {
    marketId,
  });
  return response.data;
};

export const getAvailableMarketsApi = async () => {
  const response = await axiosGetRequest(availableMarkets);
  return response.data;
};

export const cancelAllOrdersApi = async (marketId: number) => {
  const response = await axiosGetRequest(cancelAllOrder, {
    marketId,
  });
  return response.data;
};

export const cancelOrdersApi = async (
  marketId: number,
  direction: boolean,
  orderId: string
) => {
  const response = await axiosGetRequest(cancelOrder, {
    marketId,
    direction,
    orderId,
  });
  return response.data;
};

export const changeOrderSizeApi = async (
  marketId: number,
  direction: boolean,
  orderId: string,
  newSize: string
) => {
  const response = await axiosGetRequest(changeOrderSize, {
    marketId,
    direction,
    orderId,
    newSize,
  });
  return response.data;
};

export const estimatePriceApi = async () => {};

export const limitOrderApi = async (
  marketId: number,
  amount: string,
  price: string,
  direction: boolean
) => {
  const response = await axiosGetRequest(limitOrder, {
    marketId,
    direction,
    amount,
    price,
  });
  return response.data;
};

export const marketOrderApi = async (
  marketId: number,
  amount: string,
  direction: boolean
) => {
  const response = await axiosGetRequest(marketOrder, {
    marketId,
    direction,
    amount,
  });
  return response.data;
};

export const marketPriceApi = async (marketId: number) => {
  const response = await axiosGetRequest(marketPrice, {
    marketId,
  });
  return response.data;
};

export const orderBookApi = async (marketId: number) => {
  const response = await axiosGetRequest(orderBook, {
    marketId,
  });
  return response.data;
};

export const orderHistoryApi = async (marketId: number, address: string) => {
  const response = await axiosGetRequest(orderHistory, {
    marketId,
    address,
  });
  return response.data;
};

export const pairInfoApi = async (marketId: number) => {
  const response = await axiosGetRequest(pairInfo, {
    marketId,
  });
  return response.data;
};

export const registeredMarketApi = async () => {
  const response = await axiosGetRequest(registerMarket);
  return response.data;
};

export const openOrdersApi = async (
  marketId: number,
  address: string,
  orderType: "all" | "open" | "canceled"
) => {
  const response = await axiosGetRequest(openOrder, {
    marketId,
    address,
    orderType,
  });
  return response.data;
};

export const depositApi = async (
  marketId: number,
  amount: string,
  type: "base" | "quote"
) => {
  const response = await axiosGetRequest(deposit, {
    marketId,
    amount,
    type,
  });
  return response.data;
};

export const withdrawApi = async (
  marketId: number,
  amount: string,
  type: "base" | "quote"
) => {
  const response = await axiosGetRequest(withdraw, {
    marketId,
    amount,
    type,
  });
  return response.data;
};

export const marketAccountInfoApi = async (
  marketId: number,
  address: string
) => {
  const response = await axiosGetRequest(marketAccountInfo, {
    marketId,
    address,
  });
  return response.data;
};
