> MAKE SURE YOU PASS THE API-KEY as header as x-api-key

## Terminologies

**1.MaxBuyQuotes** 

it is obtained multiplying the `size`and `price` for each item in `ASK` on order book and then adding up all
these products. it gives the total number quote asset(USDC) needed to fill the all `ASK` orders

> use toDecimalPrice api for conversion to reperesent it in normal numerical form

**2.MaxSellSize**

it is obtained by summing up all the `size` in `BID` on order book. it gives the total number of base asset (APT) 
that is needed to to fill all the `ASK` orders

> use toDecimalSize api for conversion to reperesent it in normal numerical form



## 1 .Registered Markets :

Returns all registered markets

```
https://trade-endpoint/registerdMarkets
```

Request Method : GET
QueryParams : None

**Example Response**

```JSON
{
  "status": "OK",
  "data": [
    {
      "baseNameGeneric": "",
      "baseType": {
        "address": {
          "hexString": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa"
        },
        "module": "asset",
        "name": "WETH",
        "typeParams": [

        ],
        "kind": "StructTag"
      },
      "lotSize": "100",
      "marketId": 8,
      "minSize": "10",
      "quoteType": {
        "address": {
          "hexString": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa"
        },
        "module": "asset",
        "name": "USDC",
        "typeParams": [

        ],
        "kind": "StructTag"
      },
      "tickSize": "1",
      "underwriterId": 0,
      "isRecognized": true
    },
    {
      "baseNameGeneric": "",
      "baseType": {
        "address": {
          "hexString": "0x1"
        },
        "module": "aptos_coin",
        "name": "AptosCoin",
        "typeParams": [

        ],
        "kind": "StructTag"
      },
      "lotSize": "100000",
      "marketId": 7,
      "minSize": "500",
      "quoteType": {
        "address": {
          "hexString": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa"
        },
        "module": "asset",
        "name": "USDC",
        "typeParams": [

        ],
        "kind": "StructTag"
      },
      "tickSize": "1",
      "underwriterId": 0,
      "isRecognized": true
    },
  ]
}
```

## 2 . Available Markets :

Returns all available markets

```
https://trade-endpoint/availableMarket
```

Request Method : GET
QueryParams : None

**Example Response :**

```JSON
{
  "status": "OK",
  "data": [
    {
      "market": "WETH/USDC",
      "marketId": 8,
      "lotSize": 0.0001,
      "tickSize": 0.000001,
      "minSize": 0.001,
      "recognized": true
    },
    {
      "market": "APT/USDC",
      "marketId": 7,
      "lotSize": 0.001,
      "tickSize": 0.000001,
      "minSize": 0.5,
      "recognized": true
    },
  ]
}
```

## 3 . PAIR INFO

Returns CoinInfo of the market

```
https://trade-endpoint/pairInfo?marketId=7
```

Request Method : GET

QueryParams :

| PARAM    | TYPE   |
| -------- | ------ |
| marketId | number |

**Example Response :**

```JSON
{
  "status": "OK",
  "data": {
    "baseCoinInfo": {
      "decimals": 8,
      "name": "Aptos Coin",
      "supply": {
        "vec": [
          {
            "aggregator": {
              "vec": [
                {
                  "handle": "0x1b854694ae746cdbd8d44186ca4929b2b337df21d1c74633be19b2710552fdca",
                  "key": "0x619dc29a0aac8fa146714058e8dd6d2d0f3bdf5f6331907bf91f3acd81e6935",
                  "limit": "340282366920938463463374607431768211455"
                }
              ]
            },
            "integer": {
              "vec": [

              ]
            }
          }
        ]
      },
      "symbol": "APT"
    },
    "quoteCoinInfo": {
      "decimals": 6,
      "name": "USD Coin",
      "supply": {
        "vec": [
          {
            "aggregator": {
              "vec": [

              ]
            },
            "integer": {
              "vec": [
                {
                  "limit": "340282366920938463463374607431768211455",
                  "value": "25755539064739"
                }
              ]
            }
          }
        ]
      },
      "symbol": "USDC"
    }
  }
}
```

## 4 . Order History

```
https://trade-endpoint/orderHistory?marketId=7&address='your address`
```

Request Method : GET

QueryParams :

| PARAM    | TYPE   |
| -------- | ------ |
| marketId | number |
| address  | string |

**Example Response**

```JSON

{
  "status": "OK",
  "data": [
    {
      "market_id": 7,
      "order_id": "30048215016314741689679872",
      "created_at": "2024-01-03T11:33:02.815478+00:00",
      "last_updated_at": "2024-01-03T11:33:02.815478+00:00",
      "integrator": "0xd718181a753f5b759518d9b896018dd7eb3d77d80bf90ba77fffaf678f781929",
      "total_filled": 500,
      "remaining_size": 0,
      "order_status": "closed",
      "order_type": "market",
      "user": "0x9538c839fe490ccfaf32ad9f7491b5e84e610ff6edc110ff883f06ebde82463d",
      "direction": "buy",
      "price": null,
      "average_execution_price": 9902,
      "custodian_id": 0,
      "self_match_behavior": 3,
      "restriction": null,
      "last_increase_stamp": null,
      "min_base": null,
      "max_base": null,
      "min_quote": null,
      "max_quote": null,
      "total_fees_paid_in_quote_subunits": 2475
    },
    {
      "market_id": 7,
      "order_id": "30042736333324849952849920",
      "created_at": "2024-01-03T11:28:01.116065+00:00",
      "last_updated_at": "2024-01-03T11:28:01.116065+00:00",
      "integrator": "0xd718181a753f5b759518d9b896018dd7eb3d77d80bf90ba77fffaf678f781929",
      "total_filled": 500,
      "remaining_size": 0,
      "order_status": "closed",
      "order_type": "market",
      "user": "0x9538c839fe490ccfaf32ad9f7491b5e84e610ff6edc110ff883f06ebde82463d",
      "direction": "sell",
      "price": null,
      "average_execution_price": 9901,
      "custodian_id": 0,
      "self_match_behavior": 3,
      "restriction": null,
      "last_increase_stamp": null,
      "min_base": null,
      "max_base": null,
      "min_quote": null,
      "max_quote": null,
      "total_fees_paid_in_quote_subunits": 2475
    },
  ]
}
```

## 5. Market Price

```
https://trade-endpoint/marketPrice?marketId=7
```

Request Method : GET

QueryParams :

| PARAM    | TYPE   |
| -------- | ------ |
| marketId | number |

**Example Response**

```JSON
{
  "status": "OK",
  "data": {
    "bestAskPrice": "9.488",
    "bestBidPrice": "9.482",
    "maxBuyQuote": "5196404064",
    "maxSellSize": "175501"
  }
}
```

## 6. Place Market Order

```
https://trade-endpoint/marketOrder?marketId=7&amount=100000&direction=true
```

Request Method : GET

QueryParams :

| PARAMS    | TYPE    |
| --------- | ------- |
| marketId  | number  |
| amount    | number  |
| direction | boolean |

> For buy order the direction is false and for sell order the direction is true

**Example Response**

```JSON
{
  "status": "OK",
  "data": {
    "function": "0x9538c839fe490ccfaf32ad9f7491b5e84e610ff6edc110ff883f06ebde82463d::wrapper::place_market_order_user_entry_without_deposit",
    "type_arguments": [
      "0x1::aptos_coin::AptosCoin",
      "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC"
    ],
    "arguments": [
      "2329968",
      "7",
      "0xd718181a753f5b759518d9b896018dd7eb3d77d80bf90ba77fffaf678f781929",
      "true",
      "3"
    ],
    "type": "entry_function_payload"
  }
}
```

## 7 . Place Limit Order

```
https://trade-endpoint/limitOrder?marketId=7&amount=100000&price=9999&direction=true
```

Request Method : GET

QueryParams :

| PARAMS    | TYPE    |
| --------- | ------- |
| marketId  | number  |
| amount    | number  |
| price     | number  |
| direction | boolean |

> For buy order the direction is false and for sell order the direction is true

**Example Response**

```JSON
{
  "status": "OK",
  "data": {
    "function": "0x9538c839fe490ccfaf32ad9f7491b5e84e610ff6edc110ff883f06ebde82463d::wrapper::place_limit_order_user_entry_without_deposit",
    "type_arguments": [
      "0x1::aptos_coin::AptosCoin",
      "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC"
    ],
    "arguments": [
      "7",
      "0xd718181a753f5b759518d9b896018dd7eb3d77d80bf90ba77fffaf678f781929",
      "true",
      "100000000",
      "9999000",
      "0",
      "3"
    ],
    "type": "entry_function_payload"
  }
}
```

## Open Orders

```
https://trade-endpoint/openOrders?marketId=7&address=your_address&orderType=open
```

Request Method : GET

QueryParams :

| PARAMS    | TYPE         |
| --------- | ------------ |
| marketId  | number       |
| address   | your_address |
| orderType | string       |

> orderType = 'all' | 'open' | 'canceled'
> all - returns all open and closed orders
> open - returns open order only
> canceled - returns canceled orders only

**Example Response**

```JSON
{
  "status": "OK",
  "data": {
    "asks": [

    ],
    "asksStackTop": 0,
    "baseAvailable": "50000000",
    "baseCeiling": "50000000",
    "baseNameGeneric": "",
    "baseTotal": "50000000",
    "baseType": {
      "account_address": "0x1",
      "module_name": "0x6170746f735f636f696e",
      "struct_name": "0x4170746f73436f696e"
    },
    "bids": [

    ],
    "bidsStackTop": 1,
    "lotSize": "100000",
    "minSize": "500",
    "quoteAvailable": "2094550",
    "quoteCeiling": "2094550",
    "quoteTotal": "2094550",
    "quoteType": {
      "account_address": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
      "module_name": "0x6173736574",
      "struct_name": "0x55534443"
    },
    "tickSize": "1",
    "underwriterId": 0
  }
}
```

## 8. Change Order Size

```
https://trade-endpoint/changeOrderSize?marketId=7&direction=true&orderId=16351275&newSize=10000
```

Request Method : GET

QueryParams :

| PARAMS    | TYPE    |
| --------- | ------- |
| marketId  | number  |
| direction | boolean |
| orderId   | number  |
| newSize   | number  |

> For buy order the direction is false and for sell order the direction is true

> Order Id can be get from found from open orders

**Example Response**

```JSON
{
  "status": "OK",
  "data": {
    "function": "0xc0deb00c405f84c85dc13442e305df75d1288100cdd82675695f6148c7ece51c::market::change_order_size_user",
    "type_arguments": [

    ],
    "arguments": [
      "7",
      "true",
      "16351275",
      "10000000"
    ],
    "type": "entry_function_payload"
  }
}
```

## 9. Cancel Order

Cancels order based on order ID

```
https://trade-endpoint/cancelOrder?marketId=7&direction=true&orderId=16351275
```

Request Method : GET

QueryParams :

| PARAMS    | TYPE    |     |
| --------- | ------- | --- |
| marketId  | number  |     |
| direction | boolean |     |
| orderId   | number  |     |

> For buy order the direction is false and for sell order the direction is true

**Example Response**

```JSON
{
  "status": "OK",
  "data": {
    "function": "0xc0deb00c405f84c85dc13442e305df75d1288100cdd82675695f6148c7ece51c::market::cancel_order_user",
    "type_arguments": [

    ],
    "arguments": [
      "7",
      "true",
      "16351275"
    ],
    "type": "entry_function_payload"
  }
}
```

## 10. Cancel All Order

Cancels all order placed in a particular market

```
https://trade-endpoint/cancelAllOrder?marketId=7
```

Request Method : GET

QueryParams :

| PARAMS   | TYPE   |
| -------- | ------ |
| marketId | number |

**Example Response**

```JSON
{
  "status": "OK",
  "data": {
    "function": "0x9538c839fe490ccfaf32ad9f7491b5e84e610ff6edc110ff883f06ebde82463d::wrapper::cancel_all_orders",
    "type_arguments": [

    ],
    "arguments": [
      "7"
    ],
    "type": "entry_function_payload"
  }
}
```

## 11 . Order Book

Get order book data

```
https://trade-endpoint/orderBook?marketId=7
```

Request Method : GET

QueryParams :

| PARAMS   | TYPE   |
| -------- | ------ |
| marketId | number |

**Example Response**

```JSON
{
  "status": "OK",
  "data": {
    "order_book": {
      "asks": [
        {
          "custodian_id": "0",
          "market_id": "7",
          "order_id": "35377350262415905934813344",
          "price": "10400",
          "remaining_size": "1000",
          "side": true,
          "user": "0x44c55b92122d6339881ac25c3e8972281fc0a9a51b15e6b7394b6f6ba94a3837"
        },
        {
          "custodian_id": "0",
          "market_id": "7",
          "order_id": "36715108139123735812647172",
          "price": "10500",
          "remaining_size": "1000",
          "side": true,
          "user": "0xcee56fd8a0fdb05144944d90af62419ed6a252343bbd8e74f64085a78e45a43c"
        },
      ],
      "bids": [
        {
          "custodian_id": "0",
          "market_id": "7",
          "order_id": "41488221618460074975438408",
          "price": "9800",
          "remaining_size": "9996",
          "side": false,
          "user": "0x8c35edfe821ac3048602d44248524fba712b46d6074c98793c8c0b469bcfdf15"
        },
        {
          "custodian_id": "0",
          "market_id": "7",
          "order_id": "41447288303632726632703460",
          "price": "9700",
          "remaining_size": "7444",
          "side": false,
          "user": "0x8c35edfe821ac3048602d44248524fba712b46d6074c98793c8c0b469bcfdf15"
        },
      ]
    },
    "last_updated": "Sat Jan 13 2024 17:36:19 GMT+0000 (Coordinated Universal Time)"
  }
}
```

## 12. Deposit

Deposit base / quote coin to market account

```
https://trade-endpoint/deposit?marketId=7&amount=100000&type=base
```

Request Method : GET

QueryParams :

| PARAMS   | TYPE   |
| -------- | ------ |
| marketId | number |
| amount   | number |
| type     | string |

> To deposit base coin pass type as base , to deposit quotr coin pass type as quote

**Example Response**

```JSON
{
  "status": "OK",
  "data": {
    "function": "0x9538c839fe490ccfaf32ad9f7491b5e84e610ff6edc110ff883f06ebde82463d::wrapper::deposit_and_register_base",
    "type_arguments": [
      "0x1::aptos_coin::AptosCoin",
      "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC"
    ],
    "arguments": [
      "100000",
      "7"
    ],
    "type": "entry_function_payload"
  }
}
```

## 13. Withdraw

Deposit base / quote coin to market account

```
https://trade-endpoint/withdraw?marketId=7&amount=100000&type=base
```

Request Method : GET

QueryParams :

| PARAMS   | TYPE   |
| -------- | ------ |
| marketId | number |
| amount   | number |
| type     | string |

> To Withdraw base coin pass type as base , to deposit quotr coin pass type as quote

**Example Response**

```JSON
{
  "status": "OK",
  "data": {
    "function": "0xc0deb00c405f84c85dc13442e305df75d1288100cdd82675695f6148c7ece51c::user::withdraw_to_coinstore",
    "type_arguments": [
      "0x1::aptos_coin::AptosCoin"
    ],
    "arguments": [
      "100000",
      "7"
    ],
    "type": "entry_function_payload"
  }
}
```

## 14. Market Account Info

Deposit base / quote coin to market account

```
https://trade-endpoint/marketAccountInfo?marketId=7&address=yourAddress
```

Request Method : GET

QueryParams :

| PARAMS   | TYPE   |
| -------- | ------ |
| marketId | number |
| address  | string |

**Example Response**

```JSON
{
  "status": "OK",
  "data": [
    {
      "asks": [

      ],
      "base_available": "50000000",
      "base_ceiling": "50000000",
      "base_total": "50000000",
      "bids": [

      ],
      "custodian_id": "0",
      "market_id": "7",
      "quote_available": "2094550",
      "quote_ceiling": "2094550",
      "quote_total": "2094550"
    }
  ]
}
```
> base_available / quote_available - is the the user's holdings for either base or quote. When trading from a user's market account, corresponds to either user::MarketAccount.base_available or user::MarketAccount.quote_available. When trading from a user's aptos_framework::coin::CoinStore or from standalone coins, corresponds to coin value.


> base_ceiling / quote_ceiling - is the amount that the available asset amount could increase to beyond its present amount, even if the indicated trade were not executed. When trading from a user's market account, corresponds to either user::MarketAccount.base_ceiling or user::MarketAccount.quote_ceiling. When trading from a user's aptos_framework::coin::CoinStore or from standalone coins, is the same as available amount.

## 15. Get All Trades

```
https://trade-api-test.kanalabs.io/allTrades?marketId=7
```

Request Method : GET

QueryParams :

| PARAMS   | TYPE               |
| -------- | ------------------ |
| marketId | number             |
| offset   | number or optional |
| limit    | number or optional |
| order    | srting or optional |

**Example Response**

```JSON
{
  "status": "OK",
  "data": [
    {
      "txn_version": 405461827,
      "event_idx": 3,
      "emit_address": "0x68c709c6614e29f401b6bfdd0b89578381ef0fb719515c03b73cf13e45550e06",
      "time": "2024-01-14T20:12:57.172581+00:00",
      "maker_address": "0x68c709c6614e29f401b6bfdd0b89578381ef0fb719515c03b73cf13e45550e06",
      "maker_custodian_id": 0,
      "maker_order_id": "42735295308195185955972685",
      "maker_side": false,
      "market_id": 7,
      "price": 9805,
      "sequence_number_for_trade": 0,
      "size": 746,
      "taker_address": "0x0",
      "taker_custodian_id": 0,
      "taker_order_id": "42735461315098475971477504",
      "taker_quote_fees_paid": 3657
    },
    {
      "txn_version": 405461200,
      "event_idx": 2,
      "emit_address": "0x68c709c6614e29f401b6bfdd0b89578381ef0fb719515c03b73cf13e45550e06",
      "time": "2024-01-14T20:12:17.556712+00:00",
      "maker_address": "0x68c709c6614e29f401b6bfdd0b89578381ef0fb719515c03b73cf13e45550e06",
      "maker_custodian_id": 0,
      "maker_order_id": "42733856462157436610946645",
      "maker_side": false,
      "market_id": 7,
      "price": 9813,
      "sequence_number_for_trade": 0,
      "size": 20000,
      "taker_address": "0x0",
      "taker_custodian_id": 0,
      "taker_order_id": "42734704998591453879861248",
      "taker_quote_fees_paid": 98130
    },
  ]
}
```

## 16. Candle Stick Resolution

```
https://trade-endpoint/candleStickResolutions
```

Request Method : GET

QueryParams : none

**Example Response**

```JSON
{
  "status": "OK",
  "data": [
    {
      "resolution": 60
    },
    {
      "resolution": 300
    },
    {
      "resolution": 900
    },
    {
      "resolution": 1800
    },
    {
      "resolution": 3600
    },
    {
      "resolution": 14400
    },
    {
      "resolution": 43200
    },
    {
      "resolution": 86400
    }
  ]
}
```

## 16. CandleStick Data

```
https://trade-endpoint/candleStickData
```

Request Method : GET

QueryParams :

| PARAMS     | TYPE   |
| ---------- | ------ |
| marketId   | number |
| resolution | number |

**Example Response**

```JSON
{
  "status": "OK",
  "data": [
    {
      "market_id": 7,
      "resolution": 60,
      "start_time": "2024-01-14T20:52:00+00:00",
      "open": 9767,
      "high": 9783,
      "low": 9767,
      "close": 9783,
      "volume": 10263670
    },
    {
      "market_id": 7,
      "resolution": 60,
      "start_time": "2024-01-14T20:51:00+00:00",
      "open": 9769,
      "high": 9769,
      "low": 9769,
      "close": 9769,
      "volume": 420067
    },
  ]
}
```

## 17. From Decimal Size
Converts normal amount representation to lot representation

```
https://trade-endpoint/fromDecimalSize/?marketId=7&size=1000
```

Request Method : GET

QueryParams :

| PARAMS   | TYPE   |
| -------- | ------ |
| marketId | number |
| size     | number |

**Example Response**

```JSON
{
    "status": "OK",
    "data": {
        "size": "1000000"
    }
}
```

## 17. From Decimal Price

```
https://trade-endpoint/fromDecimalPrice/?marketId=7&price=8219556085
```

Request Method : GET

QueryParams :

| PARAMS   | TYPE   |
| -------- | ------ |
| marketId | number |
| price    | number |

**Example Response**

```JSON
{
    "status": "OK",
    "data": {
        "price": "8219556085000"
    }
}
```

## 18. To Decimal Price

```
https://trade-endpoint/toDecimalPrice/?marketId=7&price=8219556085
```

Request Method : GET

QueryParams :

| PARAMS   | TYPE   |
| -------- | ------ |
| marketId | number |
| price    | number |

**Example Response**

```JSON
{
    "status": "OK",
    "data": {
        "price": "8219556.085"
    }
}
```

## 19. To Decimal Size
Converts lot representation to normal amount representation

```
https://trade-endpoint/toDecimalSize/?marketId=7&size=1000
```

Request Method : GET

QueryParams :

| PARAMS   | TYPE   |
| -------- | ------ |
| marketId | number |
| price    | number |

**Example Response**

```JSON
{
    "status": "OK",
    "data": {
        "size": "1"
    }
}
```
