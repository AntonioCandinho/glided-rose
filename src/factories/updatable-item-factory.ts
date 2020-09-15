import {Item} from '../item';
import {BackstagePassItem} from '../items/backstage-pass-item';
import {ImmutableItem} from '../items/immutable-item';
import {IncreasingQualityItem} from '../items/increasing-quality-item';
import {LimitedItem} from '../items/limited-item';
import {RegularItem} from '../items/regular-item';
import {TwiceDegradingItem} from '../items/twice-degrade-item';
import {UpdatableItem} from '../items/updatable-item';

export class UpdatableItemFactory {
	public constructor() {}

	public create(item: Item): UpdatableItem {
		const limitedItem = LimitedItem.fromItem(item);
		if (/Aged Brie/i.test(item.name)) {
			return new IncreasingQualityItem(limitedItem);
		}
		if (/Sulfuras/i.test(item.name)) {
			return new ImmutableItem(limitedItem);
		}
		if (/Backstage Passes/i.test(item.name)) {
			return new BackstagePassItem(limitedItem);
		}
		const regularItem = new RegularItem(limitedItem);
		if (/Conjured/i.test(item.name)) {
			return new TwiceDegradingItem(limitedItem, regularItem);
		}
		return regularItem;
	}
}
