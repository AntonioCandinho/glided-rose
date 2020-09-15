import {Item} from '../item';
import {BackstagePassItem} from '../items/backstage-pass-item';
import {ImmutableItem} from '../items/immutable-item';
import {IncreasingQualityItem} from '../items/increasing-quality-item';
import {RegularItem} from '../items/regular-item';
import {TwiceDegradingItem} from '../items/twice-degrade-item';
import {UpdatableItem} from '../items/updatable-item';

export class UpdatableItemFactory {
	public constructor() {}

	public create(item: Item): UpdatableItem {
		if (/Aged Brie/i.test(item.name)) {
			return new IncreasingQualityItem(item);
		}
		if (/Sulfuras/i.test(item.name)) {
			return new ImmutableItem(item);
		}
		if (/Backstage Passes/i.test(item.name)) {
			return new BackstagePassItem(item);
		}
		const regularItem = new RegularItem(item);
		if (/Conjured/i.test(item.name)) {
			return new TwiceDegradingItem(item, regularItem);
		}
		return regularItem;
	}
}
