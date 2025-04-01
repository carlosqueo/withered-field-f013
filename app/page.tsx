'use client';

import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/UI/atoms/card';

export default function DashboardPage() {
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            // Redirección al login si no está autenticado
            window.location.href = '/login';
        },
    });

    if (status === 'loading')
        return <div className="flex items-center justify-center min-h-screen">Cargando...</div>;

    return (
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-500 text-white">
                    <CardTitle>Aire</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Monitoreo de calidad del aire y contaminantes.</p>
                </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-yellow-500 text-white">
                    <CardTitle>Energía</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Consumo y eficiencia energética.</p>
                </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-700 text-white">
                    <CardTitle>Agua</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Gestión y calidad del agua.</p>
                </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-green-500 text-white">
                    <CardTitle>Experiencia</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Experiencia y satisfacción del usuario.</p>
                </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-red-500 text-white">
                    <CardTitle>Residuos</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Gestión de residuos y reciclaje.</p>
                </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-purple-500 text-white">
                    <CardTitle>Transporte</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Movilidad y transporte sostenible.</p>
                </CardContent>
            </Card>
        </div>
    );
}
