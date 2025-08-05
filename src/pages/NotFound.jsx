import { ThemeToggle } from "../components/ThemeToggle";

export const NotFound = () => {
  return (
    <>
    <ThemeToggle />
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        The page you're looking for doesn't exist or might have been moved.
      </p>
      <a
        href="/"
        className="inline-block px-6 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
      >
        Go Home
      </a>
    </div>
    </>
  );
};
