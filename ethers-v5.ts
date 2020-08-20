import { Interface } from '@ethersproject/abi';
const bpoolAbi = require('./abi/bpool.json');
const multiAbi = require('./abi/multicall.json');

const multicall = '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441';

const iface = new Interface(bpoolAbi);
let calls = [];

// Produces large amount of test calls that will be aggregated
for (let i = 0; i < 4324; i++) {
    calls.push(['0x59a19d8c652fa0284f44113d0ff9aba70bd46fb4', iface.encodeFunctionData('getSwapFee', [])]);
}

const multiIface = new Interface(multiAbi);
let usage = process.cpuUsage();
console.time('encode');
multiIface.encodeFunctionData('aggregate', [calls]);
usage = process.cpuUsage(usage);
console.log('CPU usage encodeFunctionData: ', usage);
console.timeEnd('encode');
/*
Example return:
V5:
CPU usage encodeFunctionData:  { user: 7027636, system: 1674509 }
encode: 4570.885ms

V4:
CPU usage encodeFunctionData:  { user: 842372, system: 31249 }
encode: 510.924ms
*/
