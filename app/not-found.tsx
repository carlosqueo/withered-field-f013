import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-center space-y-6">
                <h1 className="text-9xl font-bold text-grayBlue-1300">404</h1>
                <h2 className="text-3xl font-semibold text-grayBlue-1400">
                    Página no encontrada
                </h2>
                <p className="text-grayBlue-1400 max-w-lg">
                    Oops! Al parecer la página que estás buscando no existe o ha
                    sido movida. Por favor, verifica la URL o regresa a la
                    página principal.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 text-white bg-orange-1000 rounded-lg hover:bg-orange-900 transition-colors duration-200"
                >
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}
