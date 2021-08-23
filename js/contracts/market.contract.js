var global = global || {};
global.contracts = global.contracts || {};

var contract = contract || {};
contract.Market = {
    abi: [{
            "constant": false,
            "inputs": [],
            "name": "cashoutBNB",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "cashoutSTEAK",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "exchange",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "_exchangeValue",
                "type": "uint256"
            }],
            "name": "setExchangeValue",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [{
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_exchangeValue",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getBalanceBNB",
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
            "name": "getBalanceSTEAK",
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
            "name": "getExchangeValue",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],

    address_test: "0xb2fDd055165c7ac66bf67dB9c6Bae33A70a74Dfa",
    address: "0x4A7D6522aAD6027fC4D3cdd72B76C8e36dcb6A09"
};