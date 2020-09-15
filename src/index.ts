export class Item {
	public constructor(
		public readonly name: string,
		public readonly sellIn: number,
		public readonly quality: number,
	) {}
}

export class GlidedRose {
	public constructor(private readonly items: Item[]) {}

	public updateQuality(): Item[] {
		return this.items;
	}
}
