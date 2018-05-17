export default class Mwildcards {
    private _skips: RegExp[] = [];
    private _querys: RegExp[] = [];
    constructor(
        public namespaces: string
    ) {
        const { _skips: skips, _querys: querys, } = this;
        const splits = namespaces.split(/[\s,]+/);
        for (let split of splits) {
            if (!split) {
                continue;
            }
            split = split.replace(/\*/g, '[\\w\\W]*?');
            if (split[0] === '-') {
                skips.push(new RegExp(`^${split.substr(1)}$`));
            } else {
                querys.push(new RegExp(`^${split}$`));
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