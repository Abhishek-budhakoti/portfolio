const ThemeToggle = ({ theme, setTheme }) => {
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed  items-center bottom-4 right-10 bg-transparent text-white px-2 py-2 rounded-full shadow hover:bg-black dark:hover:bg-white z-50 transition"
      aria-label="Toggle Theme"
    >
      {isDark ? '☀' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
