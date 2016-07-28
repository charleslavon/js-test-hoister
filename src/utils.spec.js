import {expect} from 'chai';
import * as Utils from './utils';

describe('doubleVal', () => {
	
	it('should return 0 when x param is undefined', () => {
		expect(Utils.doubleVal(undefined)).to.equal(0);
	});

	it('should return the product of x * x when x is a valid number', () => {
		expect(Utils.doubleVal(3)).to.equal(9);
		expect(Utils.doubleVal(9)).to.equal(81);
		expect(Utils.doubleVal(0)).to.equal(0);
	});

});

describe('tripeVal', () => {

	it('should return 0 when x param is undefined', () => {
		expect(Utils.tripleVal(undefined)).to.equal(0);
	});

	it('should return the product of x * x when x is a valid number', () => {
		expect(Utils.tripleVal(1)).to.equal(1);
		expect(Utils.tripleVal(12)).to.equal(1728);
		expect(Utils.tripleVal(9)).to.equal(729);
	});
});