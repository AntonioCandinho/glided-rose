import {GlidedRose, Item} from '.';

describe('GlidedRose tests', () => {
	it('should return the items unaltered', () => {
		const items = [new Item('', 0, 0)];
		const glidedRose = new GlidedRose(items);
		expect(glidedRose.updateQuality()).toEqual(items);
	});
});
