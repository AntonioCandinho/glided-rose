import {GlidedRose} from '.';
import {Item} from './item';
import {ItemBuilder} from './item-builder';

describe('GlidedRose tests', () => {
	const updateItems = (items: Item[]) => new GlidedRose(items).updateQuality();

	describe('given some regular items', () => {
		const items = [
			new ItemBuilder().build(),
			new ItemBuilder().build(),
			new ItemBuilder().build(),
		];

		it('quality and sellIn should decrease by one', () => {
			const expectedItems = items.map(
				(i) => new Item(i.name, i.sellIn - 1, i.quality - 1),
			);
			expect(updateItems(items)).toEqual(expectedItems);
		});

		it('quality and sell in should not be negative', () => {
			const item = new ItemBuilder().withSellIn(0).withQuality(0).build();
			expect(updateItems([item])).toEqual([item]);
		});
	});
});
