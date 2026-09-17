const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-xl items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 p-2 shadow-lg shadow-black/20">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search media..."
        className="w-full bg-transparent px-4 py-2 text-base text-white placeholder:text-slate-400 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
