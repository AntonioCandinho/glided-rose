import {GlidedRose} from '.';
import {Item} from './item';
import {ItemBuilder} from './item-builder';

describe('GlidedRose tests', () => {
	const updateItems = (items: Item[]) => new GlidedRose(items).updateQuality();

	describe('given some regular items', () => {
		const items = [
			ItemBuilder.createRegularItem().build(),
			ItemBuilder.createRegularItem().build(),
			ItemBuilder.createRegularItem().build(),
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

	describe('given some Aged Brie', () => {
		const agedBrie = ItemBuilder.createAgedBrie().withQuality(20).build();

		it('quality should increase over time', () => {
			expect(updateItems([agedBrie])).toEqual([
				new Item(agedBrie.name, agedBrie.sellIn - 1, agedBrie.quality + 1),
			]);
		});

		it('should never have a quality over 50', () => {
			const item = ItemBuilder.createAgedBrie().withQuality(50).build();
			expect(updateItems([item])).toEqual([
				new Item(item.name, item.sellIn - 1, item.quality),
			]);
		});
	});

	it('Sulfuras should never change sellIn nor quality value', () => {
		const item = ItemBuilder.createSulfuras().build();
		expect(updateItems([item])).toEqual([
			new Item(item.name, item.sellIn, item.quality),
		]);
	});
});
