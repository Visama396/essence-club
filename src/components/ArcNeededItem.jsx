import { useEffect, useState } from "react";

export default function ArcNeededItem({ item }) {
	const [itemData, setItemData] = useState(null);

	useEffect(() => {
		async function getItemData() {
			fetch(`https://arcdata.mahcks.com/v1/items/${item.item_name}`)
				.then((response) => response.json())
				.then((data) => setItemData(data));
		}

		getItemData();
	}, []);
	if (!itemData) {
		return <div>Cargando...</div>;
	}
	return (
		<div className="p-2 rounded-md bg-slate-900/50 border-2 border-slate-700 inline-block cursor-pointer transition duration-300 hover:bg-slate-800/60 hover:border-slate-600 backdrop-blur-lg">
			<p>
				<strong className="arc-player">{item.who_needs}</strong> necesita{" "}
				<strong className="arc-quantity">{item.how_many}</strong>{" "}
				<strong className="arc-item">{itemData.name.es}</strong>
			</p>
		</div>
	);
}
