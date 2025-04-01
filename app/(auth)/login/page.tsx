'use client';

import { useState, Suspense } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/UI/atoms/card';
import { Button } from '@/UI/atoms/Button';
import InputLabel from '@/UI/molecules/InputLabel';
import Image from 'next/image';

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        const formData = new FormData(e.currentTarget);

        try {
            const res = await signIn('credentials', {
                username: formData.get('username'),
                password: formData.get('password'),
                redirect: false,
                scope: 'me filter air water electricity',
                grant_type: 'password',
            });

            if (res?.error) {
                setError('Credenciales inválidas');
                return;
            }

            const from = searchParams.get('from') ?? '/';
            router.push(from);
            router.refresh();
        } catch (error) {
            console.error('Login failed:', error);
            setError('Algo salió mal. Por favor, inténtalo de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <Card className="w-[486px]">
                <CardHeader className="flex items-center justify-center">
                    <Image
                        src="/images/logoQueoLogin.png"
                        alt="Login Logo Queo"
                        width={200}
                        height={76}
                    />
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <InputLabel
                                label="Correo electrónico"
                                type="email"
                                name="username"
                                placeholder="Correo electrónico"
                                required
                                disabled={isLoading}
                            />
                        </div>
                        <div className="space-y-2">
                            <InputLabel
                                label="Contraseña"
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                required
                                disabled={isLoading}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <input type='checkbox' name='remember' id='remember' />
                            <label htmlFor="remember" className="text-blackenedBlue-1000 text-sm font-medium">Recordarme</label>
                        </div>
                        {error && (
                            <div className="text-red-500 text-sm">{error}</div>
                        )}
                        <Button size="lg" type="submit" className="w-full bg-primary text-white" disabled={isLoading}>
                            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                        </Button>
                        <div className="flex items-center justify-center">
                            <a className="text-sm font-medium text-primary hover:underline pt-3" href="/auth/forgot-password">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
}