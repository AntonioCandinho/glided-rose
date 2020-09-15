import {Item} from './item';
import {IncreasingQualityItem} from './increasing-quality-item';
import {RegularItem} from './regular-item';
import {TwiceDegradingItem} from './twice-degrading-item';
import {UpdatableItem} from './updatable-item';

export class UpdatableItemFactory {
	public constructor() {}

	public create(item: Item): UpdatableItem {
		if (/Aged Brie/i.test(item.name)) {
			return new IncreasingQualityItem(item);
		}
		const regularItem = new RegularItem(item);
		const twiceDegrading = new TwiceDegradingItem(regularItem);
		return twiceDegrading;
	}
}
