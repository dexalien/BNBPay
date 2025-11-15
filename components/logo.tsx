export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative size-16 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 shadow-lg shadow-yellow-500/20">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
          <path d="M50 10L65 35H35L50 10Z" fill="black" />
          <path d="M50 50L80 50L65 75L50 50Z" fill="black" />
          <path d="M50 50L20 50L35 75L50 50Z" fill="black" />
          <path d="M50 90L35 65H65L50 90Z" fill="black" />
          <circle cx="50" cy="50" r="8" fill="black" />
        </svg>
      </div>
      <span className="text-4xl font-bold">
        <span className="text-white">BNB</span>
        <span className="text-yellow-500">Pay</span>
      </span>
    </div>
  )
}
