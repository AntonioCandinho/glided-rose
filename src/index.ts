import {Item} from './item';
import {RegularItem} from './regular-item';
import {TwiceDegradingItem} from './twice-degrading-item';

export class GlidedRose {
	public constructor(private readonly items: Item[]) {}

	public updateQuality(): Item[] {
		return this.items.map((i) => {
			const regularItem = new RegularItem(i);
			return new TwiceDegradingItem(regularItem).update();
		});
	}
}
