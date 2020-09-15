import {Item} from '../item';
import {UpdatableItem} from './updatable-item';

export class BackstagePassItem implements UpdatableItem {
	public constructor(private readonly item: Item) {}

	public update(): Item {
		const {name, sellIn, quality} = this.item;
		let newQuality = quality;
		if (sellIn <= 0) {
			newQuality = 0;
		} else if (sellIn <= 5) {
			newQuality = quality + 3;
		} else if (sellIn <= 10) {
			newQuality = quality + 2;
		} else {
			newQuality = quality + 1;
		}
		newQuality = newQuality >= 50 ? 50 : newQuality;
		return new Item(name, sellIn - 1, newQuality);
	}
}
