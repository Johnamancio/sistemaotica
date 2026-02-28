"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { validarCPF } from "@/lib/validators";

export async function updateCliente(formData: FormData) {
  const id = formData.get("id") as string;
  const nome = (formData.get("nome") as string).trim();
  const telefone = (formData.get("telefone") as string).trim();
  const cpfRaw = (formData.get("cpf") as string).trim();

  const cpf = cpfRaw.replace(/\D/g, ""); 

    console.log("CPF RAW:", cpfRaw);
    console.log("CPF LIMPO:", cpf);

  if (!nome || !telefone || !cpf) {
    throw new Error("Nome, telefone e CPF são obrigatórios");
  }

  if (!validarCPF(cpf)) {
    throw new Error("CPF inválido");
  }

  await prisma.cliente.update({
    where: { id },
    data: {
      nome,
      telefone,
      cpf, 
    },
  });

  redirect("/clientes");
}