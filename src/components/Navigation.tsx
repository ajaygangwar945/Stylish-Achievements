import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navigation;