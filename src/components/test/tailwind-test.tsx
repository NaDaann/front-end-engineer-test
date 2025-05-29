export function TailwindTest() {
    return (
        <div className="p-8 bg-red-500 text-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Teste do Tailwind CSS</h1>
            <p className="text-lg">
                Se você está vendo este texto em branco sobre um fundo vermelho, o Tailwind está
                funcionando!
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-blue-500 p-4 rounded">Azul</div>
                <div className="bg-green-500 p-4 rounded">Verde</div>
                <div className="bg-yellow-500 p-4 rounded">Amarelo</div>
            </div>
            <div className="mt-4 flex space-x-2">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors">
                    Botão 1
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition-colors">
                    Botão 2
                </button>
            </div>
        </div>
    );
}
