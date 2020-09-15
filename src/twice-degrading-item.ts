import {Item} from './item';
import {UpdatableItem} from './updatable-item';

export class TwiceDegradingItem implements UpdatableItem {
	public constructor(private updatableItem: UpdatableItem) {}

	public update(): Item {
		const {quality: oldQuality, sellIn: oldSellIn} = this.item;
		const updatedItem = this.updatableItem.update();
		const newQuality =
			oldSellIn <= 0
				? oldQuality + 2 * (updatedItem.quality - oldQuality)
				: updatedItem.quality;
		if (newQuality <= 0 || newQuality >= 50) {
			return new Item(
				updatedItem.name,
				updatedItem.sellIn,
				updatedItem.quality,
			);
		}
		return new Item(updatedItem.name, updatedItem.sellIn, newQuality);
	}

	public get item(): Item {
		return this.updatableItem.item;
	}
}
