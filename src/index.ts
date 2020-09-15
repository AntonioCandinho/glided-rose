import {Item} from './item';
import {RegularItem} from './regular-item';

export class GlidedRose {
	public constructor(private readonly items: Item[]) {}

	public updateQuality(): Item[] {
		return this.items.map((i) => new RegularItem(i).update());
	}
}
