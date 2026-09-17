import ResultCard from './ResultCard'

const ResultGrid = ({ items = [] }) => {
  if (!items.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-10 text-center text-slate-300">
        No results yet. Try a different search.
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ResultGrid
