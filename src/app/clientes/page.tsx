import { prisma } from "@/lib/prisma";
import { deleteCliente } from "@/actions/deleteCliente";
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";


export default async function ClientesPage() {
  const clientes = await prisma.cliente.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Clientes</h1>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border text-gray-700">ID</th>
            <th className="p-2 border text-gray-700">Nome</th>
            <th className="p-2 border text-gray-700">Telefone</th>
            <th className="p-2 border text-gray-700">Ações</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td className="p-2 border">{cliente.id}</td>
              <td className="p-2 border">{cliente.nome}</td>
              <td className="p-2 border">{cliente.telefone}</td>

              <td className="p-2 border align-middle">
                <div className="flex justify-center gap-2">
            {/* Botão Editar */}
                  <Link
                    href={`/clientes/${cliente.id}`}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Editar
                  </Link>

                  {/* Botão Excluir */}
                  <form action={deleteCliente}>
                    <input type="hidden" name="id" value={cliente.id} />
                    <DeleteButton />
                  </form>
                </div>
              </td>
            </tr>
          ))}

          {clientes.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center p-4">
                Nenhum cliente cadastrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}