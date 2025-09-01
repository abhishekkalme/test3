"use client";

const testimonials = [
  {
    id: 1,
    quote:
      "Eklak transformed our online presence completely. His technical expertise is unmatched. The website exceeded all our expectations.",
    project: "Shanaya Training Website",
    date: "Completed March 2024",
    author: "Sawrabh",
    role: "CEO, Shanaya Training",
    avatar: "S",
    avatarColor: "bg-blue-600",
  },
  {
    id: 2,
    quote:
      "Working with Eklak was a game-changer. He understood our vision perfectly and executed it flawlessly with top-notch React skills.",
    project: "Blix Media Platform",
    date: "Completed January 2024",
    author: "Sanskar",
    role: "Founder, Blix Media",
    avatar: "S",
    avatarColor: "bg-green-600",
  },
  {
    id: 3,
    quote:
      "The AI background removal tool Eklak built saved us hundreds of hours. His solution was both innovative and reliable.",
    project: "AI Background Remover",
    date: "Completed November 2023",
    author: "Abhishek Kalme",
    role: "CTO, TechSolutions Inc",
    avatar: "E",
    avatarColor: "bg-purple-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto text-center mb-16 fade-in-up">
        <h2 className="text-4xl font-bold mb-4 text-reveal">
          Client <span className="text-blue-400">Testimonials</span>
        </h2>
        <p className="text-gray-400">
          Hear what industry leaders say about working with me
        </p>
      </div>

      {/* Endless Marquee */}
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap gap-8">
          {/* Duplicate items for seamless loop */}
          {[...testimonials, ...testimonials].map(
            (
              { id, quote, project, date, author, role, avatar, avatarColor },
              index
            ) => (
              <div
                key={id + "-" + index}
                className="glass-card p-6 rounded-xl min-w-[300px] max-w-[350px] flex-shrink-0"
              >
                <p className="text-gray-300 mb-4 leading-relaxed break-words whitespace-normal">
                  &quot;{quote}&quot;
                </p>
                <div className="text-sm text-blue-400 mb-4">
                  <div className="font-semibold">{project}</div>
                  <div className="text-gray-500">{date}</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 ${avatarColor} rounded-full flex items-center justify-center text-white font-semibold`}
                  >
                    {avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{author}</div>
                    <div className="text-sm text-gray-400">{role}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
