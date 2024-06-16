export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white rounded-lg shadow">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-sm text-gray-500 text-center">
          ©{currentYear} {" "}
          <a href="https://example.com/" className="hover:underline">
            ELAYSTATION
          </a>
          {" "}
          - Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
}
