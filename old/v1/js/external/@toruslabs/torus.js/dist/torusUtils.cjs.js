module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=19)}([function(e,t){e.exports=require("bn.js")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("@toruslabs/http-helpers")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("web3-utils")},function(e,t){e.exports=require("json-stable-stringify")},function(e,t){e.exports=require("@toruslabs/eccrypto")},function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/toConsumableArray")},function(e,t){e.exports=require("@babel/runtime/helpers/typeof")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("elliptic")},function(e,t){e.exports=require("memory-cache")},function(e,t){e.exports=require("loglevel")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/wrapNativeSuper")},function(e,t,r){"use strict";r.r(t);var n=r(7),a=r.n(n),o=r(11),i=r.n(o),u=r(3),s=r.n(u),c=r(8),f=r.n(c),l=r(12),p=r.n(l),h=r(1),b=r.n(h),d=r(6),v=r(2),m=r(0),g=r.n(m),y=r(13),k=r(5),x=r.n(k),O=r(14),w=r.n(O),P=r(4),j=r(15),S=r.n(j).a.getLogger("torus.js"),_=r(16),q=r.n(_),A=r(17),K=r.n(A),C=r(9),E=r.n(C),M=r(18);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=E()(e);if(t){var a=E()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return K()(this,r)}}var X=function(e){q()(r,e);var t=R(r);function r(e){var n,a=e.errors,o=e.responses,i=e.predicate;return f()(this,r),(n=t.call(this,"Unable to resolve enough promises.")).errors=a,n.responses=o,n.predicate=i,n}return r}(r.n(M)()(Error)),Y=function(e,t){return new Promise((function(r,n){var a,o=0,i={resolved:!1},u=new Array(e.length).fill(void 0),s=new Array(e.length).fill(void 0);e.forEach((function(c,f){c.then((function(e){s[f]=e})).catch((function(e){u[f]=e})).finally((function(){i.resolved||t(s.slice(0),i).then((function(e){i.resolved=!0,r(e)})).catch((function(e){a=e})).finally((function(t){if((o+=1)===e.length){var r=Object.values(Object.fromEntries(s.map((function(e){var t;return[null==e?void 0:e.id,null===(t=e.error)||void 0===t?void 0:t.data]})))).filter((function(e){return"string"==typeof e&&e.length>0})).map((function(e){return e.startsWith("Error occurred while verifying params")?(t=e.substr(37)).charAt(0).toUpperCase()+t.slice(1):e;var t}));if(r.length>0){var i=r.length>1?"\n".concat(r.map((function(e){return"• ".concat(e)})).join("\n")):r[0];n(new Error(i))}else{var c;n(new X({errors:u,responses:s,predicate:(null===(c=a)||void 0===c?void 0:c.message)||a}))}}}))}))}))}))},B=r(10),H=r.n(B);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function e(t,r){var n=t;if("number"==typeof n&&(n=Array.from({length:n},(function(e,t){return t}))),r>n.length||r<=0)return[];if(r===n.length)return[n];if(1===r)return n.reduce((function(e,t){return[].concat(H()(e),[[t]])}),[]);for(var a=[],o=[],i=0;i<=n.length-r+1;i+=1){o=e(n.slice(i+1),r-1);for(var u=0;u<o.length;u+=1)a.push([n[i]].concat(H()(o[u])))}return a},D=function(e,t){for(var r={},n=0;n<e.length;n+=1){var a=x()(e[n]);if(r[a]=r[a]?r[a]+1:1,r[a]===t)return e[n]}},F=function(e,t,r){var n=e.map((function(e){return Object(v.post)(e,Object(v.generateJsonRPCObject)("VerifierLookupRequest",{verifier:t,verifier_id:r.toString()})).catch((function(e){return S.error("lookup request failed",e)}))}));return Y(n,(function(t){var r=t.filter((function(e){return e})),n=D(r.map((function(e){return e&&e.error})),1+~~(e.length/2)),a=D(r.map((function(e){return e&&e.result})),1+~~(e.length/2));return a||n?Promise.resolve({keyResult:a,errorResult:n}):Promise.reject(new Error("invalid results ".concat(JSON.stringify(t))))})).catch((function(e){return S.error("Some for keylookup failed",e)}))},L=function(e,t,r,n){return new Promise((function(a,o){setTimeout((function(){F(e,t,r).then(a).catch(o)}),n)}))},T=function e(t,r,n,a,o,i){var u,s;if(void 0===n?(u=Math.floor(Math.random()*t.length),s=u):u=n%t.length,u===a)throw new Error("Looped through all");void 0!==a&&(s=a);var c=Object(v.generateJsonRPCObject)("KeyAssign",{verifier:o,verifier_id:i.toString()});return Object(v.post)("https://signer.tor.us/api/sign",c,{headers:{pubKeyX:r[u].X,pubKeyY:r[u].Y}},{useAPIKey:!0}).then((function(n){return Object(v.post)(t[u],J(J({},c),n),{headers:{"Content-Type":"application/json; charset=utf-8"}}).catch((function(n){return e(t,r,u+1,s,o,i)}))}))};function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.enableLogging,n=void 0!==r&&r,a=t.metadataHost,o=void 0===a?"https://metadata.tor.us":a,i=t.allowHost,u=void 0===i?"https://signer.tor.us/api/allow":i,s=t.serverTimeOffset,c=void 0===s?0:s;f()(this,e),this.ec=new y.ec("secp256k1"),this.metadataHost=o,this.allowHost=u,this.metadataCache=w.a,n||S.disableAll(),this.metadataLock={},this.serverTimeOffset=c||0}var t,r,n,a,o;return p()(e,[{key:"setCustomKey",value:(o=s()(b.a.mark((function e(t){var r,n,a,o,i,u,s,c,f;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.privKeyHex,n=t.metadataNonce,a=t.torusKeyHex,o=t.customKeyHex,a?i=new g.a(a,16):(u=new g.a(r,16),i=u.sub(n).umod(this.ec.curve.n)),s=new g.a(o,16),c=s.sub(i).umod(this.ec.curve.n),f=this.generateMetadataParams(c.toString(16),i.toString(16)),e.next=7,this.setMetadata(f);case 7:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"retrieveShares",value:(a=s()(b.a.mark((function e(t,r,n,a,o){var u,c,f,l,p,h,m,y,k,x=this,O=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=O.length>5&&void 0!==O[5]?O[5]:{},c=[],e.next=4,Object(v.get)(this.allowHost,{headers:{verifier:n,verifier_id:a.verifier_id}},{useAPIKey:!0});case 4:for(f=Object(d.generatePrivate)(),l=Object(d.getPublic)(f).toString("hex"),p=l.slice(2,66),h=l.slice(66),m=Object(P.keccak256)(o),y=0;y<t.length;y+=1)k=Object(v.post)(t[y],Object(v.generateJsonRPCObject)("CommitmentRequest",{messageprefix:"mug00",tokencommitment:m.slice(2),temppubx:p,temppuby:h,verifieridentifier:n})).catch((function(e){return S.error("commitment",e)})),c.push(k);return e.abrupt("return",Y(c,(function(e){return e.filter((function(e){return!(!e||"object"!==i()(e)||e.error)})).length>=3*~~(t.length/4)+1?Promise.resolve(e):Promise.reject(new Error("invalid ".concat(JSON.stringify(e))))})).then((function(e){for(var i=[],c=[],l=0;l<e.length;l+=1)e[l]&&c.push(e[l].result);for(var p=0;p<t.length;p+=1){var h=Object(v.post)(t[p],Object(v.generateJsonRPCObject)("ShareRequest",{encrypted:"yes",item:[U(U({},a),{},{idtoken:o,nodesignatures:c,verifieridentifier:n},u)]})).catch((function(e){return S.error("share req",e)}));i.push(h)}return Y(i,function(){var e=s()(b.a.mark((function e(n,a){var o,i,u,s,c,l,p,h,v,m,y,k,O,w;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.filter((function(e){return e})),i=D(n.map((function(e){return e&&e.result&&e.result.keys[0].PublicKey})),1+~~(t.length/2)),!(o.length>=1+~~(t.length/2)&&i)){e.next=32;break}for(u=[],s=[],c=0;c<n.length;c+=1)n[c]&&n[c].result&&n[c].result.keys&&n[c].result.keys.length>0?(n[c].result.keys.sort((function(e,t){return new g.a(e.Index,16).cmp(new g.a(t.Index,16))})),n[c].result.keys[0].Metadata?(l={ephemPublicKey:Buffer.from(n[c].result.keys[0].Metadata.ephemPublicKey,"hex"),iv:Buffer.from(n[c].result.keys[0].Metadata.iv,"hex"),mac:Buffer.from(n[c].result.keys[0].Metadata.mac,"hex"),mode:Buffer.from(n[c].result.keys[0].Metadata.mode,"hex")},u.push(Object(d.decrypt)(f,U(U({},l),{},{ciphertext:Buffer.from(atob(n[c].result.keys[0].Share).padStart(64,"0"),"hex")})).catch((function(e){return S.debug("share decryption",e)})))):u.push(Promise.resolve(Buffer.from(n[c].result.keys[0].Share.padStart(64,"0"),"hex")))):u.push(Promise.resolve(void 0)),s.push(new g.a(r[c],16));return e.next=8,Promise.all(u);case 8:if(p=e.sent,!a.resolved){e.next=11;break}return e.abrupt("return",void 0);case 11:h=p.reduce((function(e,t,r){return t&&e.push({index:s[r],value:new g.a(t)}),e}),[]),v=N(h.length,1+~~(t.length/2)),y=function(e){var t=v[e],r=h.filter((function(e,r){return t.includes(r)})),n=r.map((function(e){return e.value})),a=r.map((function(e){return e.index})),o=x.lagrangeInterpolation(n,a),u=Object(d.getPublic)(Buffer.from(o.toString(16,64),"hex")).toString("hex"),s=u.slice(2,66),c=u.slice(66);if(0===new g.a(s,16).cmp(new g.a(i.X,16))&&0===new g.a(c,16).cmp(new g.a(i.Y,16)))return m=o,"break"},k=0;case 15:if(!(k<v.length)){e.next=22;break}if("break"!==y(k)){e.next=19;break}return e.abrupt("break",22);case 19:k+=1,e.next=15;break;case 22:if(void 0!==m){e.next=24;break}throw new Error("could not derive private key");case 24:return e.next=26,x.getMetadata({pub_key_X:i.X,pub_key_Y:i.Y});case 26:if(O=e.sent,!a.resolved){e.next=29;break}return e.abrupt("return",void 0);case 29:return m=m.add(O).umod(x.ec.curve.n),w=x.generateAddressFromPrivKey(m),e.abrupt("return",{ethAddress:w,privKey:m.toString("hex",64),metadataNonce:O});case 32:throw new Error("invalid");case 33:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}())})));case 11:case"end":return e.stop()}}),e,this)}))),function(e,t,r,n,o){return a.apply(this,arguments)})},{key:"getMetadata",value:(n=s()(b.a.mark((function e(t,r){var n,a,o,i,u=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=x()(t),null===this.metadataLock[a]){e.next=7;break}return e.next=5,this.metadataLock[a];case 5:e.next=8;break;case 7:this.metadataLock[a]=new Promise((function(e){n=function(){u.metadataLock[a]=null,e()}}));case 8:if(null===(o=this.metadataCache.get(a))){e.next=12;break}return n&&n(),e.abrupt("return",o);case 12:return e.next=14,Object(v.post)("".concat(this.metadataHost,"/get"),t,r,{useAPIKey:!0});case 14:if((i=e.sent)&&i.message){e.next=19;break}return this.metadataCache.put(a,new g.a(0),6e4),n&&n(),e.abrupt("return",new g.a(0));case 19:return this.metadataCache.put(a,new g.a(i.message,16),6e4),e.abrupt("return",new g.a(i.message,16));case 23:return e.prev=23,e.t0=e.catch(0),S.error("get metadata error",e.t0),n&&n(),e.abrupt("return",new g.a(0));case 28:case"end":return e.stop()}}),e,this,[[0,23]])}))),function(e,t){return n.apply(this,arguments)})},{key:"generateMetadataParams",value:function(e,t){var r=this.ec.keyFromPrivate(t.toString("hex",64)),n={data:e,timestamp:new g.a(~~(this.serverTimeOffset+Date.now()/1e3)).toString(16)},a=r.sign(Object(P.keccak256)(x()(n)).slice(2));return{pub_key_X:r.getPublic().getX().toString("hex"),pub_key_Y:r.getPublic().getY().toString("hex"),set_data:n,signature:Buffer.from(a.r.toString(16,64)+a.s.toString(16,64)+new g.a(a.v).toString(16,2),"hex").toString("base64")}}},{key:"setMetadata",value:(r=s()(b.a.mark((function e(t,r){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.metadataCache.del(x()({pub_key_X:t.pub_key_X,pub_key_Y:t.pub_key_Y})),e.next=4,Object(v.post)("".concat(this.metadataHost,"/set"),t,r,{useAPIKey:!0});case 4:return n=e.sent,e.abrupt("return",n.message);case 8:return e.prev=8,e.t0=e.catch(0),S.error("set metadata error",e.t0),e.abrupt("return","");case 12:case"end":return e.stop()}}),e,this,[[0,8]])}))),function(e,t){return r.apply(this,arguments)})},{key:"lagrangeInterpolation",value:function(e,t){if(e.length!==t.length)return null;for(var r=new g.a(0),n=0;n<e.length;n+=1){for(var a=new g.a(1),o=new g.a(1),i=0;i<e.length;i+=1)if(n!==i){a=(a=a.mul(t[i].neg())).umod(this.ec.curve.n);var u=t[n].sub(t[i]);u=u.umod(this.ec.curve.n),o=o.mul(u).umod(this.ec.curve.n)}var s=a.mul(o.invm(this.ec.curve.n)).umod(this.ec.curve.n);s=s.mul(e[n]).umod(this.ec.curve.n),r=r.add(s)}return r.umod(this.ec.curve.n)}},{key:"generateAddressFromPrivKey",value:function(e){var t=this.ec.keyFromPrivate(e.toString("hex",64),"hex").getPublic().encode("hex").slice(2),r="0x".concat(Object(P.keccak256)(Buffer.from(t,"hex")).slice(26));return Object(P.toChecksumAddress)(r)}},{key:"generateAddressFromPubKey",value:function(e,t){var r=this.ec.keyFromPublic({x:e.toString("hex",64),y:t.toString("hex",64)}).getPublic().encode("hex").slice(2),n="0x".concat(Object(P.keccak256)(Buffer.from(r,"hex")).slice(26));return Object(P.toChecksumAddress)(n)}},{key:"getPublicAddress",value:(t=s()(b.a.mark((function e(t,r,n){var a,o,i,u,s,c,f,l,p,h,d,v,m,g,y=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.verifier,o=n.verifierId,i=y.length>3&&void 0!==y[3]&&y[3],e.next=4,F(t,a,o);case 4:if(e.t0=e.sent,e.t0){e.next=7;break}e.t0={};case 7:if(s=e.t0,c=s.keyResult,!(f=s.errorResult)||!JSON.stringify(f).includes("Verifier + VerifierID has not yet been assigned")){e.next=22;break}return e.next=13,T(t,r,void 0,void 0,a,o);case 13:return e.next=15,L(t,a,o,1e3);case 15:if(e.t1=e.sent,e.t1){e.next=18;break}e.t1={};case 18:l=e.t1,u=l.keyResult,e.next=27;break;case 22:if(!c){e.next=26;break}u=c,e.next=27;break;case 26:throw new Error("node results do not match at first lookup ".concat(JSON.stringify(c||{}),", ").concat(JSON.stringify(f||{})));case 27:if(!u){e.next=39;break}return p=u.keys[0],h=p.pub_key_X,d=p.pub_key_Y,e.next=31,this.getMetadata({pub_key_X:h,pub_key_Y:d});case 31:if(v=e.sent,m=this.ec.keyFromPublic({x:h.toString(16),y:d.toString(16)}).getPublic().add(this.ec.keyFromPrivate(v.toString(16)).getPublic()),h=m.getX().toString(16),d=m.getY().toString(16),g=this.generateAddressFromPubKey(m.getX(),m.getY()),i){e.next=38;break}return e.abrupt("return",g);case 38:return e.abrupt("return",{address:g,X:h,Y:d,metadataNonce:v});case 39:throw new Error("node results do not match at final lookup ".concat(JSON.stringify(c||{}),", ").concat(JSON.stringify(f||{})));case 40:case"end":return e.stop()}}),e,this)}))),function(e,r,n){return t.apply(this,arguments)})}],[{key:"setAPIKey",value:function(e){Object(v.setAPIKey)(e)}},{key:"setEmbedHost",value:function(e){Object(v.setEmbedHost)(e)}}]),e}();t.default=G}]).default;