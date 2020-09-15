import {LimitedItem} from './limited-item';

export interface UpdatableItem {
	update(): LimitedItem;
}
