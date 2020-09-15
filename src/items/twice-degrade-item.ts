import {Item} from '../item';
import {UpdatableItem} from './updatable-item';

export class TwiceDegradingItem implements UpdatableItem {
	public constructor(
		private readonly item: Item,
		private readonly updatableItem: UpdatableItem,
	) {}

	public update(): Item {
		const {name, quality: oldQuality, sellIn} = this.item;
		const updatedItem = this.updatableItem.update();
		const newQuality = oldQuality + 2 * (updatedItem.quality - oldQuality);
		if (newQuality < 0 || newQuality > 50) {
			return new Item(name, sellIn - 1, oldQuality);
		}
		return new Item(name, sellIn - 1, newQuality);
	}
}
