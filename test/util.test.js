import { assert } from 'chai';
import Utils from '../src/utils';

describe('Utils', () => {
   let utils;

   beforeEach(() => {
       utils = new Utils();
   });

   describe('getExtension', () => {
       it('Should return only the file and extension from a path', () => {
           assert.equal(utils.getExtension('Functions/Arrow_functions/index.html'), 'index.html', 'Different to expected');
       });
   });

   describe('return date in DD/MM/YYYY', () => {
      it('Should return a string', () => {
        assert.typeOf(utils.getDate(new Date()), 'string', 'Date passsed');
      });

      it('Should be of length 10', () => {
        assert.lengthOf(utils.getDate(new Date()), 10, 'Date passsed');
      });

      it('Should have the date format as dd/mm/yyyy', () => {
           assert.equal(utils.getDate(new Date('01/10/2000')), '10/01/2000', 'It is the correct date format');
      });

      it('Should return an "invalid date"', ()=> {
         assert.equal(utils.getDate(new Date('abc')), 'Invalid Date', 'It is not a valid date');
      });
   })
});
