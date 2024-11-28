export default function Footer() {
  return (
    <footer className="py-4 mt-8 border-t">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Your Site Name</p>
      </div>
    </footer>
  );
}
