import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

import ArcNeededItems from "./ArcNeededItems";
import ArcItemList from "./ArcItemList";

export default function Arc() {
	const [items, setItems] = useState([]);
	const [allItems, setAllItems] = useState([]);

	useEffect(() => {
		async function getItems() {
			const { data: items } = await supabase.from("arc-items").select();

			if (items.length > 0) {
				setItems(items);
			}

			fetch("https://arcdata.mahcks.com/v1/items")
				.then((response) => response.json())
				.then((data) => {
					setAllItems(data.items);
				});
		}

		getItems();
	}, []);

	return (
		<main className="flex flex-col gap-4 p-4">
			<header>
				<h1 className="text-center text-2xl md:text-4xl font-bold">
					ARC Raiders
        </h1>
			</header>

			<ArcNeededItems items={items} />

      <ArcItemList items={allItems} />

      <footer className='py-8 bg-slate-800/50 backdrop-blur-lg rounded-md'>
        <p className='p-4 text-amber-200 text-center text-xl'>
          Powered by <a className='text-amber-300 font-black hover:text-amber-400 transition duration-300 underline' href="https://github.com/Mahcks/arcraiders-data-api" target="_blank">Mahcks API</a>
        </p>
      </footer>
		</main>
	);
}
