import Mwildcards from '../src';
const mw = new Mwildcards('module/*, -module/XD');

console.assert(mw.isMatch('module/1'), 'fail');
console.assert(mw.isMatch('module/cc/cc'), 'fail');
console.assert(!mw.isMatch('module/XD'), 'fail');

console.log("√ all passed.");