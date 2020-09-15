import {Item} from './item';
import {UpdatableItem} from './updatable-item';

export class IncreasingQualityItem implements UpdatableItem {
	public constructor(public readonly item: Item) {}

	public update(): Item {
		const {name, sellIn, quality} = this.item;
		const newQuality = quality >= 50 ? quality : quality + 1;
		return new Item(name, sellIn - 1, newQuality);
	}
}
