import Link from 'next/link'

export const metadata = {
  title: "404 Not Found | Live Phone Answering Services",
  description: "Live Phone Answering helps businesses stay reachable, capture more leads, and deliver professional customer support with trusted live phone answering services.",
}

export default function NotFound() {
  return (
    <>
      {/* 404 SECTION */}
      <section
        className="relative overflow-hidden bg-white min-h-[70vh] flex flex-col justify-center items-center px-4 pt-20 pb-40 text-center z-10"
        aria-label="404 Not Found"
      >
        {/* Decorative blurred background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8CA365]/10 rounded-full filter blur-3xl opacity-70 animate-[pulse_6s_ease-in-out_infinite]"
          >
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto py-12 md:py-24">
          <div
            className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-green-600 rounded-full mb-12 shadow-sm relative z-20"
          >
            <svg
              className="w-12 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div className="relative w-full flex flex-col items-center justify-center">
            <h1
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] text-[10rem] sm:text-[14rem] font-black text-navy leading-none tracking-tighter opacity-5 select-none z-0"
            >
              404
            </h1>
            <div className="relative z-10 flex flex-col items-center w-full">
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-[#34414A] leading-tight mb-4 text-center"
              >
                Looks like we missed your call...
              </h2>
              <p className="text-lg text-gray-500 mb-10 max-w-lg text-center">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
              <Link
                href="/"
                className="inline-flex justify-center items-center bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold py-3.5 px-8 rounded-lg shadow-[0_8px_32px_rgba(140,163,101,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(140,163,101,0.4)]"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* EmailJS Integration */}
    </>
  )
}
