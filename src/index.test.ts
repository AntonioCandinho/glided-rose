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

		it('quality should not be negative', () => {
			const item = new ItemBuilder().withQuality(0).build();
			expect(updateItems([item])).toEqual([
				new Item(item.name, item.sellIn - 1, 0),
			]);
		});

		it('once the sellIn value is 0 quality should decrease by two', () => {
			const item = new ItemBuilder().withSellIn(0).withQuality(4).build();
			expect(updateItems([item])).toEqual([
				new Item(item.name, -1, item.quality - 2),
			]);
		});
	});
});
