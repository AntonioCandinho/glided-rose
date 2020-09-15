import {Item} from '../item';
import {UpdatableItem} from './updatable-item';

export class ImmutableItem implements UpdatableItem {
	public constructor(private readonly item: Item) {}

	public update(): Item {
		return this.item;
	}
}
