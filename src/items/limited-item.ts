import {Item} from '../item';

export class LimitedItem {
	private constructor(
		public readonly name: string,
		public readonly sellIn: number,
		public readonly quality: number,
	) {}

	public static fromItem(item: Item) {
		return new LimitedItem(item.name, item.sellIn, item.quality);
	}

	public addQuality(n: number): LimitedItem {
		return this.withQuality(this.quality + n);
	}

	public addSellIn(n: number): LimitedItem {
		return this.withSellIn(this.sellIn + n);
	}

	public withQuality(quality: number): LimitedItem {
		if (this.quality > 50 || this.quality < 0) {
			return this;
		}
		if (quality > 50) {
			return new LimitedItem(this.name, this.sellIn, 50);
		}
		if (quality < 0) {
			return new LimitedItem(this.name, this.sellIn, 0);
		}
		return new LimitedItem(this.name, this.sellIn, quality);
	}

	public withSellIn(sellIn: number): LimitedItem {
		return new LimitedItem(this.name, sellIn, this.quality);
	}

	public asItem(): Item {
		return {
			name: this.name,
			sellIn: this.sellIn,
			quality: this.quality,
		};
	}
}
