const match_$$_symbol = Symbol("**");
const match_$_symbol = Symbol("*");

export default class Mwildcards {
    private _skips: RegExp[] = [];
    private _querys: RegExp[] = [];
    constructor(
        public namespaces: string,
        opt: { nocase?: boolean } = {}
    ) {
        const { nocase } = opt;
        const regexp_flags = nocase ? 'i' : '';
        const { _skips: skips, _querys: querys, } = this;
        const splits = namespaces.split(/[\s,]+/);
        for (let split of splits) {
            if (!split) {
                continue;
            }
            const $$: Array<string> = split.split(/\*{2,}/g);
            for (let i = 0; i < $$.length; i += 2) {
                $$.splice(i, 1, $$[i].replace(/\*/g, '\\w*?'), '[\\w\\W]*?');
            }
            $$.pop();
            split = $$.join('');

            if (split[0] === '-') {
                skips.push(new RegExp(`^${split.substr(1)}$`, regexp_flags));
            } else {
                querys.push(new RegExp(`^${split}$`, regexp_flags));
            }
        }
    }
    isMatch(name: string) {
        const { _skips: skips, _querys: querys, } = this;
        for (let skip_regexp of skips) {
            if (skip_regexp.test(name)) {
                return false;
            }
        }
        for (let query_regexp of querys) {
            if (query_regexp.test(name)) {
                return true;
            }
        }
        return false;
    }
}