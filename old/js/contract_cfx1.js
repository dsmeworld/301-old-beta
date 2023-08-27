//conflux的web3:https://cdn.jsdelivr.net/npm/js-conflux-sdk/dist/js-conflux-sdk.umd.min.js
//初始化conflux网络
/*
var conflux = new window.TreeGraph.Conflux({
    url: 'https://main.confluxrpc.com',
    logger: console,
    networkId: 1029,
});
*/
/*
var PRIVATE_KEY = '0xa4bae11d9053e344255aad6dcbedb6a4efc7361f20a4770313dc2ca59d929c51'; // sender private key
var account = conflux.wallet.addPrivateKey(PRIVATE_KEY);
*/
//abi信息
var systemabi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "inviter",
        "type": "address",
        "networkId": 1029
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "beinviter",
        "type": "address",
        "networkId": 1029
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "inviteEvent",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_add",
        "type": "address",
        "networkId": 1029
      }
    ],
    "name": "addcontrol",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_add",
        "type": "address",
        "networkId": 1029
      },
      {
        "internalType": "uint256",
        "name": "_level",
        "type": "uint256"
      }
    ],
    "name": "addlevel",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_add",
        "type": "address",
        "networkId": 1029
      },
      {
        "internalType": "uint256",
        "name": "_level3",
        "type": "uint256"
      }
    ],
    "name": "addlevel3",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "amount_for_player",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_add",
        "type": "address",
        "networkId": 1029
      },
      {
        "internalType": "uint256",
        "name": "_acount",
        "type": "uint256"
      }
    ],
    "name": "blackHouseAdd",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
        "networkId": 1029
      }
    ],
    "name": "blockhouse",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "changeNameFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_changeNameFee",
        "type": "uint256"
      }
    ],
    "name": "chchangeNameFee",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_beinviter",
        "type": "address",
        "networkId": 1029
      },
      {
        "internalType": "address",
        "name": "_inviter",
        "type": "address",
        "networkId": 1029
      }
    ],
    "name": "chlastinvter",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_beinviter",
        "type": "address",
        "networkId": 1029
      },
      {
        "internalType": "address",
        "name": "_inviter",
        "type": "address",
        "networkId": 1029
      }
    ],
    "name": "chllastinviter",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_registerPower",
        "type": "uint256"
      }
    ],
    "name": "chregisterPower",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
        "networkId": 1029
      }
    ],
    "name": "controlMap",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_add",
        "type": "address",
        "networkId": 1029
      }
    ],
    "name": "grantAdd",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
        "networkId": 1029
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "invitemap",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
        "networkId": 1029
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address",
        "networkId": 1029
      },
      {
        "internalType": "uint256",
        "name": "award1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "award2",
        "type": "uint256"
      }
    ],
    "name": "inviterControl",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "manager",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
        "networkId": 1029
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
        "networkId": 1029
      }
    ],
    "name": "playerMap",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "playersMap",
    "outputs": [
      {
        "internalType": "string",
        "name": "playerName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "playerAddress",
        "type": "address",
        "networkId": 1029
      },
      {
        "internalType": "uint256",
        "name": "playerId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "playerlevel",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "inviterlastlast",
        "type": "address",
        "networkId": 1029
      },
      {
        "internalType": "address",
        "name": "inviterlast",
        "type": "address",
        "networkId": 1029
      },
      {
        "internalType": "uint256",
        "name": "inviterAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "inviterAmount2",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "inviterAword1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "inviterAword2",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "level3",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "systemUpgrade",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "registerTime",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "registerPower",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_inviter",
        "type": "uint256"
      }
    ],
    "name": "registerforplayer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

var kongtouCabi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "senderAddress",
        "type": "address",
        "networkId": 1029
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "assetsEvent",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "adminer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
        "networkId": 1029
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "baseRewardSign",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_adminer",
        "type": "address",
        "networkId": 1029
      }
    ],
    "name": "chadminer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_baseRewardSign",
        "type": "uint256"
      }
    ],
    "name": "chbaseRewardSign",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_last",
        "type": "uint256"
      }
    ],
    "name": "chlast",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lastlast",
        "type": "uint256"
      }
    ],
    "name": "chlastlast",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "a1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "a2",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "a3",
        "type": "uint256"
      }
    ],
    "name": "chleveljiacheng",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "jiacheng1",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "jiacheng2",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "jiacheng3",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "last",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "lastlast",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
        "networkId": 1029
      }
    ],
    "name": "playmap",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "timer",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
        "networkId": 1029
      }
    ],
    "name": "playmapping",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "base",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "m",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "suiji",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "leveljiacheng",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "random",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
        "networkId": 1029
      }
    ],
    "name": "rrr",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_add",
        "type": "address",
        "networkId": 1029
      }
    ],
    "name": "rrrrrr",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "sign",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "signRequireXMY",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "system",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address",
        "networkId": 1029
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address",
        "networkId": 1029
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "total_awards",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]



//注入WEB3并初始化合约
conflux.enable().then(function(){
    system = confluxJS.Contract({abi:systemabi,address:'0x8b8dcfb878d9b004931272b198423e41693767e7'});
    kongtou =  confluxJS.Contract({abi:kongtouCabi,address:'0x8f7bc6710b354201cd0346e79d2620c406f6ec53'});
})
/*
//注入合约和accounts
async function init_contract(){
    //获取账户
    //const accounts = await conflux.enable();
    let accounts = await conflux.send("cfx_requestAccounts");
    console.log(accounts[0])

    //初始化合约
    contract = await  confluxJS.Contract({abi:systemabi,address:'0x8b8dcfb878d9b004931272b198423e41693767e7'});

    //调用CALL方法
    let res = await contract.tt()
      console.log(res[0]);

}
*/


//精度
function toDecimal2(x) {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  var f = Math.round(x * 100) / 100;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}



                //时间戳转化为日期
                function getLocalTime(nS) {  
                  return new Date(parseInt(nS) * 1000 ).toLocaleString().replace(/:\d{1,2}$/,' ');  
              }
          
              function getLocalTime3(nS) {  
                  return new Date((parseInt(nS)+86400*3) * 1000 ).toLocaleString().replace(/:\d{1,2}$/,' ');  
              }