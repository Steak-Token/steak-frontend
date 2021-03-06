"use strict";

/**
 * JavaScript code that interacts with the page and Web3 wallets
 */

const MAINNET = "56";
const TESTNET = "97";

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const evmChains = window.evmChains;

// Web3modal instance
var web3Modal

// Chosen wallet provider given by the dialog window
var provider;

var web3;

var chainId;

// Address of the selected account
var selectedAccount;

var addressSteak;
var addressMarket;
var addressLottery;

var steak;
var market;
var lottery;

function init() {
    console.log("WalletConnectProvider is", WalletConnectProvider);
    //console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);
    console.log("window.ethereum is", window.ethereum);

    // Check that the web page is run in a secure context,
    // as otherwise MetaMask won't be available
    if (location.protocol !== 'https:') {
        // https://ethereum.stackexchange.com/a/62217/620
        //const alert = document.querySelector("#alert-error-https");
        //alert.style.display = "block";
        //document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
        //return;
    }

    // Tell Web3modal what providers we have available.
    // Built-in web browser provider (only one can exist as a time)
    // like MetaMask, Brave or Opera is added automatically by Web3modal
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    56: 'https://bsc-dataseed.binance.org/'
                }
            }
        }
    };

    web3Modal = new Web3Modal({
        cacheProvider: true, // optional
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });

    console.log("Web3Modal instance is", web3Modal);
}


/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {
    // Get a Web3 instance for the wallet
    web3 = new Web3(provider);

    // Get connected chain id from Ethereum node
    chainId = await web3.eth.getChainId();

    addressSteak = contract.Steak.address;
    addressMarket = contract.Market.address;
    addressLottery = contract.Lottery.address;
    if (chainId == TESTNET) addressSteak = contract.Steak.address_test;
    if (chainId == TESTNET) addressMarket = contract.Market.address_test;
    if (chainId == TESTNET) addressLottery = contract.Lottery.address_test;

    steak = new web3.eth.Contract(contract.Steak.abi, addressSteak);
    market = new web3.eth.Contract(contract.Market.abi, addressMarket);
    lottery = new web3.eth.Contract(contract.Lottery.abi, addressLottery);

    steak.events.Approval(function(error, result) {
        if (!error) {
            
        } else
            console.log(error);
    });

    steak.events.Transfer(function(error, result) {
        if (!error) {

        } else
            console.log(error);
    });

    steak.events.Claimed(function(error, result) {
        if (!error) {
            reloadSteak();
        } else
            console.log(error);
    });

    steak.events.Burned(function(error, result) {
        if (!error) {
            reloadSteak();
        } else
            console.log(error);
    });

    lottery.events.WinnerDeclared(function(error, result) {
        if (!error) {
            dialog.msg("Winner!", "Winner of this round is " + result.returnValues[0] + ", starting new round!");
        } else
            console.log(error);
    });

    lottery.events.PlayerParticipated(function(error, result) {
        if (!error) {
            dialog.msg("Participated!", "You have successfully participated in this lottery round!");
        } else
            console.log(error);
    });

    lottery.events.NewRound(function(error, result) {
        if (!error) {
            reloadSteak();
        } else
            console.log(error);
    });

    console.log("Web3 instance is", web3);

    isCorrectChain(chainId);

    if (window.ethereum) {
        window.ethereum.on("chainChanged", (chainId) => {
            isCorrectChain(chainId);
            console.log(chainId)
        });
    }

    // Load chain information over an HTTP API
    const chainData = evmChains.getChain(chainId);

    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts();

    // MetaMask does not give you all accounts, only the selected account
    console.log("Got accounts", accounts);
    selectedAccount = accounts[0];

    // Display fully loaded UI for wallet data
    //document.querySelector("#btn-connect").style.display = "none";
}

function isCorrectChain(id) {
    if (id == MAINNET || id == TESTNET) {
        $(".td-top").css("vertical-align", "top");
        $("#container-header").show();
        $("#screen-connected").show();
        $("#screen-wrong-chain").hide();
        if (id == TESTNET) {
            switchNetworkOffer();
            $("#container-msg-testnet").show();
        } else {
            $("#container-msg-testnet").hide();
        }
        return true;
    } else {
        $("#container-header").hide();
        $("#screen-connected").hide();
        $("#screen-wrong-chain").show();
        switchNetworkOffer();
        return false;
    }
}

async function switchNetworkOffer() {
    try {
        var params = [{ chainId: MAINNET }];
        if (window.ethereum) {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: params
            });
        }
    } catch (e) {
        console.log(e);
    }
}

async function addToken() {
    const tokenAddress = addressSteak;
    const tokenSymbol = "STEAK";
    const tokenDecimals = 18;
    const tokenImage = "https://alkhemeia.de/steak/images/metamask-token-icon.png";

    try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await ethereum.request({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20", // Initially only supports ERC20, but eventually more!
                options: {
                    address: tokenAddress, // The address that the token is at.
                    symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                    decimals: tokenDecimals, // The number of decimals in the token
                    image: tokenImage, // A string url of the token logo
                },
            },
        });

        if (wasAdded) {
            console.log("Thanks for your interest!");
        } else {
            console.log("Your loss!");
        }
    } catch (error) {
        console.log(error);
    }
}

async function onConnect() {
    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
        location.reload();
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        if (isCorrectChain(chainId)) location.reload();
    });

    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
        location.reload();
    });

    await fetchAccountData(provider);
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {

    console.log("Killing the wallet connection", provider);

    // TODO: Which providers have close method?
    if (provider.close) {
        await provider.close();

        // If the cached provider is not cleared,
        // WalletConnect will default to the existing session
        // and does not allow to re-scan the QR code with a new wallet.
        // Depending on your use case you may want or want not his behavir.
        await web3Modal.clearCachedProvider();
        provider = null;
    }

    selectedAccount = null;

    // Set the UI back to the initial state
    //document.querySelector("#prepare").style.display = "block";
    //document.querySelector("#connected").style.display = "none";
}

/**
 * Main entry point.
 */
window.addEventListener('load', async() => {
    init();
    await onConnect();
    initSteak();
    //document.querySelector("#btn-connect").addEventListener("click", onConnect);
});