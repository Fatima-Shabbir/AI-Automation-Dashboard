const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg">

      {/* subtle glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center px-4 py-10 relative">

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          AI Automation Dashboard
        </h1>

        <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
          Upload CSV → Run Automation → Send Emails → Generate Reports
        </p>

        {/* subtle accent line */}
        <div className="mt-6 flex justify-center">
          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-80" />
        </div>

      </div>

    </header>
  );
};

export default Header;