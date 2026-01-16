import { useState, useEffect } from 'react'

export default function ArcItemDetails({ id }) {
  const [item, setItem] = useState(null)

  useEffect(() => {
    fetch(`https://arcdata.mahcks.com/v1/items/${id}`)
      .then(response => response.json())
      .then(data => setItem(data))
  }, [])

  if (!item) {
    return <div>Cargando...</div>
  }

  return (
    <div className='p-2 rounded-md bg-slate-900/50 border-2 border-slate-700 cursor-pointer transition duration-300 hover:bg-slate-800/60 hover:border-slate-600 flex flex-row items-center gap-2'>
      <img className='size-10' src={item.imageFilename} alt={item.id} />
      <p className='font-semibold'>{item.name.en}</p>
      <p className='text-sm text-gray-500 flex-1 text-right pr-4'>Reciclar</p>
    </div>
  )
}
