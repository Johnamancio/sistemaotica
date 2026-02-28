import { createCliente } from "@/actions/createCliente";

export default function NovoCliente() {
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Novo Cliente</h1>

      <form action={createCliente} className="flex flex-col gap-4 max-w-sm">
        <input
          name="nome"
          placeholder="Nome"
          className="border p-2"
        />

        <input
          name="telefone"
          placeholder="Telefone"
          className="border p-2"
        />

        <button
          type="submit"
          className="bg-black text-white p-2"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}