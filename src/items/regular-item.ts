import {LimitedItem} from './limited-item';
import {UpdatableItem} from './updatable-item';

export class RegularItem implements UpdatableItem {
	public constructor(private readonly item: LimitedItem) {}

	public update(): LimitedItem {
		const {sellIn, quality} = this.item;
		let newQuality = sellIn <= 0 ? quality - 2 : quality - 1;
		return this.item.addSellIn(-1).withQuality(newQuality);
	}
}
