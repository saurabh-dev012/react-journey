const tabs = [
  { key: 'photos', label: 'Photos' },
  { key: 'videos', label: 'Videos' },
]

const Tabs = ({ activeTab, onChange }) => {
  return (
    <div className="inline-flex rounded-full border border-slate-700 bg-slate-900/80 p-1">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key

        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs
