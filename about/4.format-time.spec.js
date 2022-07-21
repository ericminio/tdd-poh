const { expect } = require('chai');
const { instrumented, savePartialCoverage } = require('./support/coverage');
const { coverage, formatTime} = instrumented({ sut: 'formatTime', file:'./instrumented/format-time.js' });

describe('format time', () => {

    after(() => {
        savePartialCoverage(coverage());
    });

    it('keeps seconds as is', () => {
        expect(formatTime(45)).to.equal('45s');
    });
    it('eventually displays minutes', () => {
        expect(formatTime(65)).to.equal('1mn 5s');
    });
    it('resists time', () => {
        expect(formatTime(100)).to.equal('1mn 40s');
    });
});