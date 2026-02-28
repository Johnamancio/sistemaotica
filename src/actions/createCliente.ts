"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { validarCPF } from "@/lib/validators";

export async function createCliente(formData: FormData) {
  const nome = (formData.get("nome") as string)?.trim();
  const telefone = (formData.get("telefone") as string)?.trim();
  const cpfRaw = (formData.get("cpf") as string)?.trim();

  if (!nome || !telefone || !cpfRaw) {
    throw new Error("Nome, telefone e CPF são obrigatórios");
  }

  const cpf = cpfRaw.replace(/\D/g, "");

  if (!validarCPF(cpf)) {
    throw new Error("CPF inválido");
  }

  try {
    await prisma.cliente.create({
      data: {
        nome,
        telefone,
        cpf,
      },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      throw new Error("CPF já cadastrado");
    }
    throw error;
  }

  redirect("/clientes");
}