import {GlidedRose} from '.';
import {Item} from './item';
import {ItemBuilder} from './item-builder';

describe('GlidedRose tests', () => {
	const updateItems = (items: Item[]) => new GlidedRose(items).updateQuality();

	const expectUpdatedItem = (
		beforeUpdate: ItemBuilder,
		afterUpdate: ItemBuilder,
	) => {
		expect(updateItems([beforeUpdate.build()])).toEqual([afterUpdate.build()]);
	};

	describe('given some regular items', () => {
		const regularItem = ItemBuilder.createRegularItem();

		it('quality and sellIn should decrease by one', () => {
			expectUpdatedItem(regularItem, regularItem.addQuality(-1).addSellIn(-1));
		});

		it('quality should not be negative', () => {
			const zeroQualityItem = regularItem.withQuality(0);
			expectUpdatedItem(zeroQualityItem, zeroQualityItem.addSellIn(-1));
		});

		it('once the sellIn value is 0 quality should decrease by two', () => {
			const overDateItem = regularItem.withSellIn(0);
			expectUpdatedItem(
				overDateItem,
				overDateItem.addSellIn(-1).addQuality(-2),
			);
		});
	});

	describe('given some Aged Brie', () => {
		const agedBrie = ItemBuilder.createAgedBrie().withQuality(20);

		it('quality should increase over time', () => {
			expectUpdatedItem(agedBrie, agedBrie.addSellIn(-1).addQuality(+1));
		});

		it('should never have a quality over 50', () => {
			const maxQualityBrie = agedBrie.withQuality(50);
			expectUpdatedItem(maxQualityBrie, maxQualityBrie.addSellIn(-1));
		});
	});

	describe('given some Sulfuras', () => {
		const sulfura = ItemBuilder.createSulfuras();

		it('should nave change sellIn neither quality', () => {
			expectUpdatedItem(sulfura, sulfura);
		});
	});

	describe('given some Backstage passes', () => {
		const backstagePassBuilder = ItemBuilder.createBackstagePass().withQuality(
			10,
		);

		it('their quality should increase', () => {
			const earlyBackstagePass = backstagePassBuilder.withSellIn(11);
			expectUpdatedItem(
				earlyBackstagePass,
				earlyBackstagePass.addQuality(1).addSellIn(-1),
			);
		});

		it('their quality should never be greater than 50', () => {
			const maxQualityBackstagePass = backstagePassBuilder.withQuality(50);
			expectUpdatedItem(
				maxQualityBackstagePass,
				maxQualityBackstagePass.addSellIn(-1),
			);
		});

		it('their quality should increase by 2 when sellIn is 10 or less', () => {
			const day10BackstagePass = backstagePassBuilder.withSellIn(10);
			expectUpdatedItem(
				day10BackstagePass,
				day10BackstagePass.addQuality(2).addSellIn(-1),
			);
		});

		it('their quality should increase by 3 when sellIn is 5 or less', () => {
			const day5BackstagePass = backstagePassBuilder.withSellIn(5);
			expectUpdatedItem(
				day5BackstagePass,
				day5BackstagePass.addQuality(3).addSellIn(-1),
			);
		});

		it('their quality should drop to 0 when sellIn is 0 or negative', () => {
			const concertDayBackstagePass = backstagePassBuilder.withSellIn(0);
			expectUpdatedItem(
				concertDayBackstagePass,
				concertDayBackstagePass.withQuality(0).addSellIn(-1),
			);
		});
	});

	describe('given some Conjured items', () => {
		const regularItem = ItemBuilder.createRegularItem()
			.withSellIn(5)
			.withQuality(9)
			.build();
		const conjura = ItemBuilder.createConjured()
			.withSellIn(5)
			.withQuality(18)
			.build();

		it('should degrade twice as fast as regular items', () => {
			let updatedRegular = regularItem;
			let updatedConjura = conjura;
			while (updatedRegular.quality > 0) {
				const [newRegular] = updateItems([updatedRegular]);
				const [newConjura] = updateItems([updatedConjura]);
				expect(updatedConjura.quality - newConjura.quality).toEqual(
					2 * (updatedRegular.quality - newRegular.quality),
				);
				updatedRegular = newRegular;
				updatedConjura = newConjura;
			}
		});
	});
});
