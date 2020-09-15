import {LimitedItem} from './limited-item';
import {UpdatableItem} from './updatable-item';

export class ImmutableItem implements UpdatableItem {
	public constructor(private readonly item: LimitedItem) {}

	public update(): LimitedItem {
		return this.item;
	}
}
