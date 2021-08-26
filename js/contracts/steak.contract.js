var global = global || {};
global.contracts = global.contracts || {};

var contract = contract || {};
contract.Steak = {
    abi: [{
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [{
                "name": "",
                "type": "string"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                    "name": "delegate",
                    "type": "address"
                },
                {
                    "name": "numTokens",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "name": "numTokens",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [{
                "name": "",
                "type": "uint8"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "claimBlock",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "numTokens",
                "type": "uint256"
            }],
            "name": "burn",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "claim",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                "name": "tokenOwner",
                "type": "address"
            }],
            "name": "balanceOf",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "newSteak",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [{
                "name": "",
                "type": "string"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "numTokens",
                "type": "uint256"
            }],
            "name": "convert",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "name": "numTokens",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "delegate",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalStakingSupply",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "name": "_startSupply",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "name": "tokenOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                "indexed": false,
                "name": "staker",
                "type": "address"
            }],
            "name": "Claimed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                "indexed": false,
                "name": "staker",
                "type": "address"
            }],
            "name": "Burned",
            "type": "event"
        }
    ],

    address_test: "0x5EFE9f4496Ed34B4AAa01620219658D7138c7422",
    address: "0x10f15964b523e0c3ef776a4f91e81c1b8c7c9001"
};