import {Item} from './item';

export class ItemBuilder {
	public constructor(
		private readonly name = `item-${Math.random()}`,
		private readonly sellIn = Math.floor(Math.random() * 100) + 1,
		private readonly quality = Math.floor(Math.random() * 50) + 1,
	) {}

	public static createRegularItem(): ItemBuilder {
		return new ItemBuilder();
	}

	public static createAgedBrie(): ItemBuilder {
		return new ItemBuilder(`Aged Brie ${Math.random()}`);
	}

	public static createSulfuras(): ItemBuilder {
		return new ItemBuilder(`Sulfuras ${Math.random()}`);
	}

	public static createBackstagePass(): ItemBuilder {
		return new ItemBuilder(`Backstage passes ${Math.random()}`);
	}

	public addQuality(n: number): ItemBuilder {
		return this.withQuality(this.quality + n);
	}

	public addSellIn(n: number): ItemBuilder {
		return this.withSellIn(this.sellIn + n);
	}

	public withSellIn(sellIn: number): ItemBuilder {
		return new ItemBuilder(this.name, sellIn, this.quality);
	}

	public withQuality(quality: number): ItemBuilder {
		return new ItemBuilder(this.name, this.sellIn, quality);
	}

	public build(): Item {
		return new Item(this.name, this.sellIn, this.quality);
	}
}
