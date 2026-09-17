const ResultCard = ({ item }) => {
  if (!item) return null

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-400/60">
      <img
        src={item.image}
        alt={item.title}
        className="h-56 w-full object-cover"
        loading="lazy"
      />
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-cyan-300">
          <span>{item.source}</span>
          <span>{item.type}</span>
        </div>
        <h3 className="line-clamp-2 text-base font-semibold text-white">{item.title}</h3>
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>{item.user}</span>
          <span>{item.likes ? `${item.likes} likes` : item.duration ? `${item.duration}s` : 'Live'}</span>
        </div>
      </div>
    </article>
  )
}

export default ResultCard
