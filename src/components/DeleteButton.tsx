"use client";

export default function DeleteButton() {
  return (
    <button
      type="submit"
      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      onClick={(e) => {
        if (!confirm("Tem certeza que deseja excluir?")) {
          e.preventDefault();
        }
      }}
    >
      Excluir
    </button>
  );
}   