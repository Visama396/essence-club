import { useState, useEffect } from "react";

export default function ArcItemDetails({ id, searchTerm }) {
	const [item, setItem] = useState(null);

	useEffect(() => {
		fetch(`https://arcdata.mahcks.com/v1/items/${id}`)
			.then((response) => response.json())
			.then((data) => setItem(data));
	}, []);

	if (!item) {
		return <div>Cargando...</div>;
	}

	return (
		<div className={`${item.rarity} p-2 rounded-md bg-slate-900/50 shadow-sm border-2 cursor-pointer transition duration-400 hover:shadow-md hover:bg-slate-800/60 ${id.includes(searchTerm.toLowerCase()) ? 'flex' : 'hidden'} flex-row items-center gap-2 backdrop-blur-lg`}>
			<img className="size-10" src={item.imageFilename} alt={item.id} />
			<p className='font-semibold'>{item.name.en}</p>
			<p className="text-sm text-gray-500 flex-1 text-right pr-4">Reciclar</p>
		</div>
	);
}
