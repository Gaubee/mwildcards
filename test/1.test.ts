import Mwildcards from '../src';
const mw = new Mwildcards('module/*, -module/XD');

console.assert(mw.isMatch('module/1'), `mw.isMatch('module/1')`);
console.assert(!mw.isMatch('module/XD'), `!mw.isMatch('module/XD')`);
console.assert(!mw.isMatch('Module/1'), `!mw.isMatch('Module/1')`);
console.assert(!mw.isMatch('Module/1/2'), `!mw.isMatch('Module/1/2')`);

const mwa = new Mwildcards('module/**', { nocase: true });
console.assert(mwa.isMatch('Module/cc'), `mwa.isMatch('Module/cc')`);
console.assert(mwa.isMatch('Module/1/2'), `mwa.isMatch('Module/1/2')`);

const mwb = new Mwildcards('*/**/*');
console.assert(mwb.isMatch('1/2/3'), `mwb.isMatch('1/2/3')`);
console.assert(mwb.isMatch('1/2.1/2.2/3'), `mwb.isMatch('1/2.1/2.2/3')`);

const mwc = new Mwildcards('*/qaq', { nocase: true });
console.assert(mwc.isMatch("XX/qaq"), `mwc.isMatch("XX/qaq")`);
console.assert(mwc.isMatch("XX/QAQ"), `mwc.isMatch("XX/QAQ")`);
console.assert(!mwc.isMatch("xx/qaqxx"), `!mwc.isMatch("xx/qaqxx")`);

console.log("√ all passed.");