import Mwildcards from '../src';
const mw = new Mwildcards('module/*, -module/XD');

if (mw.isMatch('module/1') !== true) {
    throw new Error("fail")
}
if (mw.isMatch('module/cc/cc') !== true) {
    throw new Error("fail")
}
if (mw.isMatch('module/XD') !== false) {
    throw new Error("fail")
}