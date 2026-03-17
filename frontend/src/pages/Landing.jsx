import { Link } from 'react-router-dom';
import { useState } from 'react';

const features = [
  {
    icon: '🎬',
    title: 'Movie Catalogue',
    description:
      'Browse a complete library of films with detailed pages, posters, and essential information.',
  },
  {
    icon: '⭐',
    title: 'Star Ratings',
    description:
      'Rate your favourite movies from 1 to 5 stars and check the community average for every title.',
  },
  {
    icon: '💬',
    title: 'Comments',
    description:
      'Share your thoughts, read other viewers\' reviews, and join the conversation.',
  },
  {
    icon: '🔍',
    title: 'Live Search',
    description:
      'Find any movie instantly with the real-time search bar.',
  },
  {
    icon: '👤',
    title: 'Personal Account',
    description:
      'Create your profile to save your ratings and keep track of your contributions.',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description:
      'A seamless experience on desktop, tablet, and smartphone.',
  },
];

const creators = [
  {
    name: 'Flora Salanson',
    role: 'Backend Developer',
    bio: 'Flora designed the Django architecture, built the REST APIs, and handled authentication and database modelling.',
    avatar: '🧑‍💻',
    color: 'from-red-900 to-gray-900',
  },
  {
    name: 'Moussa Elisoltanov',
    role: 'Frontend Developer',
    bio: 'Moussa brought the interface to life with React and Tailwind CSS, crafting every component and user interaction.',
    avatar: '👨‍🎨',
    color: 'from-gray-900 to-red-900',
  },
];

// Demo posters for the hero visual
const DEMO_POSTERS = [
  'https://image.tmdb.org/t/p/w300/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
  'https://image.tmdb.org/t/p/w300/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
  'https://image.tmdb.org/t/p/w300/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
  'https://image.tmdb.org/t/p/w300/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
  'https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  'https://image.tmdb.org/t/p/w300/3bhkrj58Vtu7enYsLegHnDmni3M.jpg',
];

function PosterGrid() {
  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-xs mx-auto md:max-w-sm opacity-80">
      {DEMO_POSTERS.map((url, i) => (
        <div
          key={i}
          className="aspect-[2/3] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={url}
            alt="movie poster"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/150x225/1a1a1a/555?text=Film';
            }}
          />
        </div>
      ))}
    </div>
  );
}

function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
      <div className="px-4 md:px-12 py-4 md:py-6 flex items-center justify-between">
        <h1 className="text-netflix-red font-bold">
          <span className="hidden md:inline text-4xl">WhichMovieTonight</span>
          <span className="md:hidden text-2xl">WMT</span>
        </h1>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#features" className="text-white hover:text-gray-300 transition">
            Features
          </a>
          <a href="#team" className="text-white hover:text-gray-300 transition">
            Team
          </a>
          <Link
            to="/login"
            className="text-white hover:text-gray-300 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-netflix-red hover:bg-red-700 text-white px-4 py-2 rounded transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col space-y-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black bg-opacity-95 absolute top-full left-0 w-full py-4 px-4 space-y-4">
          <a href="#features" className="block text-white hover:text-gray-300 py-2" onClick={() => setOpen(false)}>
            Features
          </a>
          <a href="#team" className="block text-white hover:text-gray-300 py-2" onClick={() => setOpen(false)}>
            Team
          </a>
          <Link to="/login" className="block text-white hover:text-gray-300 py-2" onClick={() => setOpen(false)}>
            Login
          </Link>
          <Link
            to="/signup"
            className="block bg-netflix-red hover:bg-red-700 text-white px-4 py-2 rounded transition text-center"
            onClick={() => setOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-netflix-dark text-white">
      <LandingNavbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-red-950 opacity-90" />
        {/* Decorative glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-netflix-red opacity-10 blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full px-4 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 pt-24 pb-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-netflix-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Discover · Rate · Share
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Which movie <br />
              <span className="text-netflix-red">tonight&nbsp;?</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed">
              WhichMovieTonight is the community platform to discover films,
              share your reviews, and find your perfect next watch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/signup"
                className="bg-netflix-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition text-lg shadow-lg shadow-red-900/40"
              >
                Get started for free
              </Link>
              <Link
                to="/"
                className="border border-white/30 hover:border-white text-white px-8 py-4 rounded-lg transition text-lg backdrop-blur-sm"
              >
                Browse movies →
              </Link>
            </div>
          </div>

          {/* Poster grid */}
          <div className="flex-1 flex items-center justify-center">
            <PosterGrid />
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-netflix-dark to-transparent" />
      </section>

      {/* ── STATS ── */}
      <section className="bg-gray-900/50 border-y border-white/5 py-10 px-4 md:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '1,000+', label: 'Movies' },
            { value: '5 ★', label: 'Rating system' },
            { value: '100%', label: 'Free' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl md:text-4xl font-extrabold text-netflix-red">{value}</p>
              <p className="text-gray-400 text-sm mt-1 uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything you need
          </h3>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
            An app built for film lovers — simple to use and packed with features.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="bg-gray-900 hover:bg-gray-800 border border-white/5 hover:border-netflix-red/40 rounded-xl p-6 transition-all duration-300 group"
              >
                <span className="text-4xl mb-4 block">{feat.icon}</span>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-netflix-red transition-colors">
                  {feat.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-4 md:px-12 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How it works
          </h3>

          <div className="flex flex-col md:flex-row items-start gap-8">
            {[
              { step: '01', title: 'Create your account', desc: 'Sign up for free in seconds and unlock all features instantly.' },
              { step: '02', title: 'Explore movies', desc: 'Browse the catalogue, use the search bar, or filter by genre to find your next watch.' },
              { step: '03', title: 'Rate & comment', desc: 'Give a star rating and leave a comment to share your opinion with the community.' },
            ].map(({ step, title, desc }, i) => (
              <div key={step} className="flex-1 relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-netflix-red/50 to-transparent -translate-x-4 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-netflix-red flex items-center justify-center font-bold text-sm mb-4 shadow-lg shadow-red-900/40">
                    {step}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="py-24 px-4 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The Team
          </h3>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
            A project imagined and built with passion by two developer film enthusiasts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {creators.map((creator) => (
              <div
                key={creator.name}
                className="relative bg-gray-900 border border-white/5 rounded-2xl overflow-hidden group hover:border-netflix-red/40 transition-all duration-300"
              >
                {/* Accent gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${creator.color}`} />

                <div className="p-8 text-center">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-gray-800 border-2 border-netflix-red/30 group-hover:border-netflix-red transition-colors flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg">
                    {creator.avatar}
                  </div>

                  <h4 className="text-white font-bold text-xl mb-1">{creator.name}</h4>
                  <span className="inline-block text-netflix-red text-xs font-semibold uppercase tracking-wider mb-4">
                    {creator.role}
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">{creator.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-black to-red-950 opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-netflix-red opacity-10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to pick <span className="text-netflix-red">your movie&nbsp;?</span>
          </h3>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Join the WhichMovieTonight community and never be indecisive about your movie night again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-netflix-red hover:bg-red-700 text-white font-bold px-10 py-4 rounded-lg transition text-lg shadow-lg shadow-red-900/40"
            >
              Create a free account
            </Link>
            <Link
              to="/login"
              className="border border-white/30 hover:border-white text-white px-10 py-4 rounded-lg transition text-lg"
            >
              Log in
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black border-t border-white/5 py-10 px-4 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h1 className="text-netflix-red font-bold text-2xl">WhichMovieTonight</h1>
          <div className="flex gap-8 text-gray-400 text-sm">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#team" className="hover:text-white transition">Team</a>
            <Link to="/" className="hover:text-white transition">Catalogue</Link>
          </div>
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} WhichMovieTonight</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
