export default function Placeholder({ label, className = '' }) {
  return (
    <div className={`placeholder-media ${className}`}>
      <div>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <div dangerouslySetInnerHTML={{ __html: label }} />
      </div>
    </div>
  )
}
