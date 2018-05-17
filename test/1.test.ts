import Mwildcards from '../src';
const mw = new Mwildcards('module/*, -module/XD');

console.assert(mw.isMatch('module/1'));
console.assert(mw.isMatch('module/cc/cc'));
console.assert(!mw.isMatch('module/XD'));
console.assert(!mw.isMatch('Module/1'));

const mwc = new Mwildcards('*/qaq', { nocase: true });
console.assert(mwc.isMatch("XX/qaq"));
console.assert(mwc.isMatch("XX/QAQ"));
console.assert(mwc.isMatch("x/c/QAQ"));
console.assert(!mwc.isMatch("xx/qaqxx"));

console.log("√ all passed.");