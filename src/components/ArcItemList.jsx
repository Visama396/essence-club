import { useState, useEffect } from 'react'

import ArcItemDetails from './ArcItemDetails'

import { Search } from 'lucide-react'

export default function ArcItemList({ items }) {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex p-4 gap-4 rounded-md bg-slate-900/50 border-2 border-slate-700 cursor-pointer transition duration-300 hover:bg-slate-800/60 hover:border-slate-600'>
        <Search className='size-6' />
        <input type='text' className='outline-0 flex-1' placeholder='Insert item name' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-2'>
        {
          items.map((item, index) => <ArcItemDetails key={index} id={item.id} searchTerm={searchTerm} />)
        }
      </div>
    </div>

  )
}
