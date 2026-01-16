import ArcItemDetails from './ArcItemDetails'

export default function ArcItemList({ items }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
      {
        items.map((item, index) => (
          <ArcItemDetails key={index} id={item.id} />
        ))
      }
    </div>
  )
}
