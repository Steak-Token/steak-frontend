module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("web3-eth-contract");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("web3-utils");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ETHEREUM_NETWORK", function() { return /* reexport */ ETHEREUM_NETWORK; });
__webpack_require__.d(__webpack_exports__, "abi", function() { return /* reexport */ abi; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ nodeDetailManager; });

// CONCATENATED MODULE: ./src/interfaces.ts
var ETHEREUM_NETWORK = {
  ROPSTEN: "ropsten",
  MAINNET: "mainnet"
};
var abi = [{
  constant: true,
  inputs: [],
  name: "currentEpoch",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [{
    internalType: "uint256",
    name: "epoch",
    type: "uint256"
  }],
  name: "getEpochInfo",
  outputs: [{
    internalType: "uint256",
    name: "id",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "n",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "k",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "t",
    type: "uint256"
  }, {
    internalType: "address[]",
    name: "nodeList",
    type: "address[]"
  }, {
    internalType: "uint256",
    name: "prevEpoch",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "nextEpoch",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [{
    internalType: "address",
    name: "nodeAddress",
    type: "address"
  }],
  name: "getNodeDetails",
  outputs: [{
    internalType: "string",
    name: "declaredIp",
    type: "string"
  }, {
    internalType: "uint256",
    name: "position",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "pubKx",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "pubKy",
    type: "uint256"
  }, {
    internalType: "string",
    name: "tmP2PListenAddress",
    type: "string"
  }, {
    internalType: "string",
    name: "p2pListenAddress",
    type: "string"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}];
// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(4);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(5);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(6);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "web3-eth-contract"
var external_web3_eth_contract_ = __webpack_require__(2);
var external_web3_eth_contract_default = /*#__PURE__*/__webpack_require__.n(external_web3_eth_contract_);

// EXTERNAL MODULE: external "web3-utils"
var external_web3_utils_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/nodeDetailManager.ts








var INFURA_PROJECT_ID = "b8cdb0e4cff24599a286bf8e87ff1c96";

var nodeDetailManager_NodeDetailManager = /*#__PURE__*/function () {
  function NodeDetailManager() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$network = _ref.network,
        network = _ref$network === void 0 ? ETHEREUM_NETWORK.MAINNET : _ref$network,
        _ref$proxyAddress = _ref.proxyAddress,
        proxyAddress = _ref$proxyAddress === void 0 ? "0x638646503746d5456209e33a2ff5e3226d698bea" : _ref$proxyAddress;

    classCallCheck_default()(this, NodeDetailManager);

    defineProperty_default()(this, "_currentEpoch", "19");

    defineProperty_default()(this, "_torusNodeEndpoints", ["https://torus-19.torusnode.com/jrpc", "https://torus-node.ens.domains/jrpc", "https://torus-node.matic.network/jrpc", "https://torus.zilliqa.network/jrpc", "https://torus-mainnet.cosmos.network/jrpc", "https://torus2.etherscan.com/jrpc", "https://torus-node-v2.skalelabs.com/jrpc", "https://torus-node.binancex.dev/jrpc", "https://torusnode.ont.io/jrpc"]);

    defineProperty_default()(this, "_torusNodePub", [{
      X: "bbe83c64177c3775550e6ba6ac2bc059f6847d644c9e4894e42c60d7974d8c2b",
      Y: "82b49a7caf70def38cdad2740af45c1e4f969650105c5019a29bb18b21a9acb5"
    }, {
      X: "c208cac4ef9a47d386097a9c915b28e9cb89213abee8d26a17198ee261201b0d",
      Y: "c7db2fe4631109f40833de9dc78d07e35706549ee48fa557b33e4e75e1047873"
    }, {
      X: "ca1766bb426d4ca5582818a0c5439d560ea64f5baa060793ab29dd3d0ceacfe",
      Y: "d46c1d08c40e1306e1bca328c2287b8268166b11a1ba4b8442ea2ad0c5e32152"
    }, {
      X: "c3934dd2f6f4b3d2e1e398cc501e143c1e1a381b52feb6d1525af34d16253768",
      Y: "71f5141a5035799099f5ea3e241e66946bc55dc857ac3bd7d6fcdb8dcd3eeeef"
    }, {
      X: "22e66f1929631d00bf026227581597f085fd94fd952fc0dca9f0833398b5c064",
      Y: "6088b3912e10a1e9d50355a609c10db7d188f16a2e2fd7357e51bf4f6a74f0a1"
    }, {
      X: "9dc9fa410f3ce9eb70df70cdea00a49f2c4cc7a31c08c0dab5f863ed35ff5139",
      Y: "627a291cb87a75c61da3f65d6818e1e05e360217179817ed27e8c73bca7ec122"
    }, {
      X: "118b9fc07e97b096d899b9f6658463ce6a8caa64038e37fc969df4e6023dd8c6",
      Y: "baf9fa4e51770f4796ea165dd03a769b8606681a38954a0a92c4cbffd6609ce9"
    }, {
      X: "8a6d8b925da15a273dec3d8f8395ec35cd6878f274b2b180e4e106999db64043",
      Y: "96f67f870c157743da0b1eb84d89bf30500d74dc84c11f501ee1cb013acc8c46"
    }, {
      X: "39cecb62e863729f572f7dfc46c24867981bf04bb405fed0df39e33984bfade5",
      Y: "61c2364434012e68a2be2e9952805037e52629d7762fafc8e10e9fb5bad8f790"
    }]);

    defineProperty_default()(this, "_torusIndexes", [1, 2, 3, 4, 5, 6, 7, 8, 9]);

    defineProperty_default()(this, "_network", ETHEREUM_NETWORK.MAINNET);

    defineProperty_default()(this, "nodeListAddress", void 0);

    defineProperty_default()(this, "updated", void 0);

    defineProperty_default()(this, "nodeListContract", void 0);

    var url;

    try {
      var localUrl = new URL(network);
      url = localUrl.href;
    } catch (_) {
      url = "https://".concat(network, ".infura.io/v3/").concat(INFURA_PROJECT_ID);
    }

    external_web3_eth_contract_default.a.setProvider(url);
    this.nodeListContract = new external_web3_eth_contract_default.a(abi, proxyAddress);
    this.nodeListAddress = proxyAddress;
    this.updated = false;
    this._network = network;
  }

  createClass_default()(NodeDetailManager, [{
    key: "_nodeDetails",
    get: function get() {
      return {
        currentEpoch: this._currentEpoch,
        nodeListAddress: this.nodeListAddress,
        torusNodeEndpoints: this._torusNodeEndpoints,
        torusNodePub: this._torusNodePub,
        torusIndexes: this._torusIndexes,
        updated: this.updated
      };
    }
  }, {
    key: "getCurrentEpoch",
    value: function getCurrentEpoch() {
      return this.nodeListContract.methods.currentEpoch().call();
    }
  }, {
    key: "getEpochInfo",
    value: function getEpochInfo(epoch) {
      return this.nodeListContract.methods.getEpochInfo(epoch).call();
    }
  }, {
    key: "getNodeEndpoint",
    value: function getNodeEndpoint(nodeEthAddress) {
      return this.nodeListContract.methods.getNodeDetails(nodeEthAddress).call();
    }
  }, {
    key: "getNodeDetails",
    value: function () {
      var _getNodeDetails = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _this = this;

        var skip,
            skipPostEpochCheck,
            latestEpoch,
            latestEpochInfo,
            indexes,
            nodeEndpointRequests,
            nodeEndPoints,
            updatedEndpoints,
            updatedNodePub,
            index,
            endPointElement,
            endpoint,
            _args = arguments;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                skip = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
                skipPostEpochCheck = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
                _context.prev = 2;

                if (!(skip && this._network === ETHEREUM_NETWORK.MAINNET)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", this._nodeDetails);

              case 5:
                if (!this.updated) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", this._nodeDetails);

              case 7:
                _context.next = 9;
                return this.getCurrentEpoch();

              case 9:
                latestEpoch = _context.sent;

                if (!(skipPostEpochCheck && this._network === ETHEREUM_NETWORK.MAINNET && latestEpoch === this._currentEpoch)) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", this._nodeDetails);

              case 12:
                this._currentEpoch = latestEpoch;
                _context.next = 15;
                return this.getEpochInfo(latestEpoch);

              case 15:
                latestEpochInfo = _context.sent;
                indexes = latestEpochInfo.nodeList.map(function (_, pos) {
                  return pos + 1;
                });
                this._torusIndexes = indexes;
                nodeEndpointRequests = latestEpochInfo.nodeList.map(function (nodeEthAddress) {
                  return _this.getNodeEndpoint(nodeEthAddress);
                });
                _context.next = 21;
                return Promise.all(nodeEndpointRequests);

              case 21:
                nodeEndPoints = _context.sent;
                updatedEndpoints = [];
                updatedNodePub = [];

                for (index = 0; index < nodeEndPoints.length; index += 1) {
                  endPointElement = nodeEndPoints[index];
                  endpoint = "https://".concat(endPointElement.declaredIp.split(":")[0], "/jrpc");
                  updatedEndpoints.push(endpoint);
                  updatedNodePub.push({
                    X: Object(external_web3_utils_["toHex"])(endPointElement.pubKx).replace("0x", ""),
                    Y: Object(external_web3_utils_["toHex"])(endPointElement.pubKy).replace("0x", "")
                  });
                }

                this._torusNodeEndpoints = updatedEndpoints;
                this._torusNodePub = updatedNodePub;
                this.updated = true;
                return _context.abrupt("return", this._nodeDetails);

              case 31:
                _context.prev = 31;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", this._nodeDetails);

              case 34:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 31]]);
      }));

      function getNodeDetails() {
        return _getNodeDetails.apply(this, arguments);
      }

      return getNodeDetails;
    }()
  }]);

  return NodeDetailManager;
}();

/* harmony default export */ var nodeDetailManager = (nodeDetailManager_NodeDetailManager);
// CONCATENATED MODULE: ./index.ts



/***/ })
/******/ ])["default"];