import {Item} from '../item';
import {UpdatableItem} from './updatable-item';

export class RegularItem implements UpdatableItem {
	public constructor(private readonly item: Item) {}

	public update(): Item {
		const {sellIn, quality, name} = this.item;
		let newQuality = sellIn <= 0 ? quality - 2 : quality - 1;
		newQuality = newQuality > 0 ? newQuality : 0;
		return new Item(name, sellIn - 1, newQuality);
	}
}
