// Uses ethers@4.0.39
import { ethers, utils } from 'ethers';
const bpoolAbi = require('./abi/bpool.json');
const multiAbi = require('./abi/multicall.json');

const multicall = '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441';

const iface = new ethers.utils.Interface(bpoolAbi);
let calls = [];

// Produces large amount of test calls that will be aggregated
for (let i = 0; i < 4324; i++) {
    calls.push(['0x59a19d8c652fa0284f44113d0ff9aba70bd46fb4', iface.functions.getSwapFee.encode([])]);
}

const multiIface = new ethers.utils.Interface(multiAbi);
let usage = process.cpuUsage();
console.time('encode');
multiIface.functions.aggregate.encode([calls]);
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
