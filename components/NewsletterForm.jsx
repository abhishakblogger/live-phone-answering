export default function NewsletterForm() {
  return (
    <form action="#" method="POST" className="relative flex items-center w-full mb-6">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#8CA365] focus:ring-1 focus:ring-[#8CA365] transition-all placeholder-slate-500 text-sm"
        required
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="absolute right-2 bg-[#8CA365] hover:bg-[#7a8f57] text-white rounded-md p-2 transition-transform hover:scale-110 cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
      </button>
    </form>
  )
}
