import {ImmutableItem} from './immutable-item';
import {IncreasingQualityItem} from './increasing-quality-item';
import {Item} from './item';
import {RegularItem} from './regular-item';
import {TwiceDegradingItem} from './twice-degrading-item';
import {UpdatableItem} from './updatable-item';

export class UpdatableItemFactory {
	public constructor() {}

	public create(item: Item): UpdatableItem {
		if (/Aged Brie/i.test(item.name)) {
			return new IncreasingQualityItem(item);
		}
		if (/Sulfuras/i.test(item.name)) {
			return new ImmutableItem(item);
		}
		const regularItem = new RegularItem(item);
		const twiceDegrading = new TwiceDegradingItem(regularItem);
		return twiceDegrading;
	}
}
