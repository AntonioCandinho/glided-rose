import {LimitedItem} from './limited-item';
import {UpdatableItem} from './updatable-item';

export class TwiceDegradingItem implements UpdatableItem {
	public constructor(
		private readonly item: LimitedItem,
		private readonly updatableItem: UpdatableItem,
	) {}

	public update(): LimitedItem {
		const {quality: oldQuality} = this.item;
		const updatedItem = this.updatableItem.update();
		const newQuality = oldQuality + 2 * (updatedItem.quality - oldQuality);
		return this.item.withQuality(newQuality).addSellIn(-1);
	}
}
