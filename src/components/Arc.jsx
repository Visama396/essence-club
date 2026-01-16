import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

import ArcNeededItems from './ArcNeededItems'
import ArcItemList from './ArcItemList'

export default function Arc() {
  const [items, setItems] = useState([])
  const [allItems, setAllItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getItems() {
      const { data: items } = await supabase.from('arc-items').select()

      if (items.length > 0) {
        setItems(items)
      }

      fetch('https://arcdata.mahcks.com/v1/items')
        .then(response => response.json())
        .then(data => {
          setAllItems(data.items)
          setLoading(false)
        })
    }

    getItems()
  }, [])

  return (
    <main className='p-4'>
      <header>
        <h1 className='text-3xl font-bold'>ARC Raiders</h1>
        <p className='text-gray-400'>Items que quiere cada uno</p>
      </header>

      <ArcNeededItems items={items} />

      <ArcItemList items={allItems} />
    </main>
  )
}
