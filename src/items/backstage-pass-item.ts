import {LimitedItem} from './limited-item';
import {UpdatableItem} from './updatable-item';

export class BackstagePassItem implements UpdatableItem {
	public constructor(private readonly item: LimitedItem) {}

	public update(): LimitedItem {
		const {sellIn} = this.item;
		let updatedItem = this.item;
		if (sellIn <= 0) {
			updatedItem = updatedItem.withQuality(0);
		} else if (sellIn <= 5) {
			updatedItem = updatedItem.addQuality(3);
		} else if (sellIn <= 10) {
			updatedItem = updatedItem.addQuality(2);
		} else {
			updatedItem = updatedItem.addQuality(1);
		}
		return updatedItem.addSellIn(-1);
	}
}
