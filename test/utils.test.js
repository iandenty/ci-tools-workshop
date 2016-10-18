import { assert } from 'chai';
import Utils from '../src/utils';

describe('Utils', () => {
    let utils;

    beforeEach(() => {
        utils = new Utils();
    });

    describe('Sum', () => {
        it('Should return the sum of all arguments', () => {
            assert.equal(utils.sum(1, 2), 3, 'With two positive ints');
            assert.equal(utils.sum(1, 2, 3, 4), 10, 'With four positive ints');
        });

        it('Should return 0', () => {
            assert.equal(utils.sum(), 0, 'With no arguments');
            assert.equal(utils.sum('abc'), 0, 'When a string has been passed');
        })
    })
})
