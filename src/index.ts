import {Item} from './item';
import {UpdatableItemFactory} from './updatable-item-factory';

export class GlidedRose {
	public constructor(
		private readonly items: Item[],
		private readonly factory: UpdatableItemFactory = new UpdatableItemFactory(),
	) {}

	public updateQuality(): Item[] {
		return this.items.map((i) => this.factory.create(i).update());
	}
}
