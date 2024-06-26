export const WRAP_ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  { inputs: [], name: "ApproveFromZeroAddress", type: "error" },
  { inputs: [], name: "ApproveToZeroAddress", type: "error" },
  { inputs: [], name: "ClaimToZeroAddress", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "count", type: "uint256" },
      { internalType: "uint256", name: "pending", type: "uint256" },
    ],
    name: "DistributeFailed",
    type: "error",
  },
  { inputs: [], name: "ETHTransferFailed", type: "error" },
  { inputs: [], name: "InsufficientAllowance", type: "error" },
  { inputs: [], name: "InsufficientBalance", type: "error" },
  { inputs: [], name: "InvalidReporter", type: "error" },
  { inputs: [], name: "NotClaimableAccount", type: "error" },
  { inputs: [], name: "PriceIsInitialized", type: "error" },
  { inputs: [], name: "TransferFromZeroAddress", type: "error" },
  { inputs: [], name: "TransferToZeroAddress", type: "error" },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "wad", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
] as const;
