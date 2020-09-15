import {Item} from './item';
import {UpdatableItem} from './updatable-item';

export class RegularItem implements UpdatableItem {
	public constructor(private item: Item) {}

	public update(): Item {
		const {sellIn, quality, name} = this.item;
		const newSellIn = sellIn > 0 ? sellIn - 1 : sellIn;
		const newQuality = quality > 0 ? quality - 1 : quality;
		return new Item(name, newSellIn, newQuality);
	}
}
