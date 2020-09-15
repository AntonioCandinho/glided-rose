import {LimitedItem} from './limited-item';
import {UpdatableItem} from './updatable-item';

export class IncreasingQualityItem implements UpdatableItem {
	public constructor(private readonly item: LimitedItem) {}

	public update(): LimitedItem {
		return this.item.addQuality(+1).addSellIn(-1);
	}
}
