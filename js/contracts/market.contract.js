var global = global || {};
global.contracts = global.contracts || {};

var contract = contract || {};
contract.Market = {
    abi: [{
            "inputs": [{
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_exchangeValue",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [],
            "name": "cashoutBNB",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "cashoutSTEAK",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "exchange",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalanceBNB",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalanceSTEAK",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getExchangeValue",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_exchangeValue",
                "type": "uint256"
            }],
            "name": "setExchangeValue",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],

    address_test: "0x79208EFe78c1A92E71207ded43aD6a483C4BEaE3",
    address: "0x714b923751a8a2c4c596e3A6218a9E59f2Ed5A0A"
};