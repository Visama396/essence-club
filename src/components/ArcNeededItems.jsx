import ArcNeededItem from "./ArcNeededItem";

export default function ArcNeededItems({ items }) {
	if (items.length == 0) {
		return (
			<div>
				<p>No hay items</p>
			</div>
		);
	}
	return (
		<div className="py-4">
			{items.map((item) => (
				<ArcNeededItem item={item} key={item.id} />
			))}
		</div>
	);
}
