import { prisma } from "@/lib/prisma";
import { updateCliente } from "@/actions/updateCliente";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditarClientePage({ params }: Props) {
  const { id } = await params;

  const cliente = await prisma.cliente.findUnique({
    where: { id }, 
  });

  if (!cliente) {
    notFound();
  }

  return (
    <div className="p-8 max-w-lg">
      <h1 className="text-2xl font-bold mb-6">Editar Cliente</h1>

      <form action={updateCliente} className="flex flex-col gap-4">
        <input type="hidden" name="id" value={cliente.id} />

        <div>
          <label className="block mb-1 font-medium">Nome</label>
          <input
            type="text"
            name="nome"
            defaultValue={cliente.nome}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Telefone</label>
          <input
            type="text"
            name="telefone"
            defaultValue={cliente.telefone}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Atualizar
        </button>
      </form>
    </div>
  );
}