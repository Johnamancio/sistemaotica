import { createCliente } from "@/actions/createCliente";

export default function NovoCliente() {
  return (
    <div className="p-10 bg-white rounded shadow max-w-md text-gray-700 align-middle mx-auto mt-50">
      <h1 className="text-2xl mb-4">Novo Cliente</h1>

      <form action={createCliente} className="flex flex-col gap-4 max-w-sm">
        <input
          name="nome"
          placeholder="Nome"
          required
          className="border p-2 text-gray-700"
        />

        <input
          name="telefone"
          placeholder="Telefone"
          required
          className="border p-2"
        />

        <button
          type="submit"
          className="bg-black text-white p-2 hover:bg-slate-800"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}