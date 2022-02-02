import { default as common } from './common.js';

common.myConsoleLog(' asp aspa aspsa');

const myConsoleLog = function(x){
    console.log('x', x);
}

export default {
    myConsoleLog
}