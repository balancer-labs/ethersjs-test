Test to compare function encode for ethersv4 vs ethersv5.
Runs 4324 getSwapFee calls to a Balancer pool contract.

# To Run:

$ yarn install

$ ts-node ethers-v4.ts

$ ts-node ethers-v5.ts

# Example Output:

V5:

CPU usage encodeFunctionData:  { user: 7027636, system: 1674509 }

encode: 4570.885ms

V4:

CPU usage encodeFunctionData:  { user: 842372, system: 31249 }

encode: 510.924ms
