'use client';

const title = 'Configuración';

export default function Home() {
    return (
        <div className="grid grid-cols-12 h-full">
            <div className="col-span-9 p-8 flex flex-col gap-10">
                <div className="text-2xl text-grayBlue-1400">{title}</div>
            </div>
        </div>
    );
}
