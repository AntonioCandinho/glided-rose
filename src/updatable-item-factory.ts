import {BackstagePassItem} from './backstage-pass-item';
import {ImmutableItem} from './immutable-item';
import {IncreasingQualityItem} from './increasing-quality-item';
import {Item} from './item';
import {RegularItem} from './regular-item';
import {UpdatableItem} from './updatable-item';
import {TwiceDegradingItem} from './twice-degrade-item';

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
			return new TwiceDegradingItem(regularItem);
		}
		return regularItem;
	}
}
