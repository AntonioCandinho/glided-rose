import {Item} from './item';

export interface UpdatableItem {
	readonly item: Item;
	update(): Item;
}
