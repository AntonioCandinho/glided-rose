import {Item} from './item';
import {UpdatableItem} from './updatable-item';

export class RegularItem implements UpdatableItem {
	public constructor(public readonly item: Item) {}

	public update(): Item {
		const {sellIn, quality, name} = this.item;
		const newQuality = quality > 0 ? quality - 1 : quality;
		return new Item(name, sellIn - 1, newQuality);
	}
}
