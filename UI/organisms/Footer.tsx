const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-white border-t text-sm text-[#9aa0ac] py-5 hidden md:block mt-auto">
            <div className="text-center ">
              Copyright © {currentYear} <a href="/dashboard">QueoAccess</a> (V{ process.env.NEXT_PUBLIC_APP_VERSION } SPA). Todos los derechos reservados.
            </div>
        </footer>
    );
};

export { Footer };