"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createCliente(formData: FormData) {
  const nome = formData.get("nome") as string;
  const telefone = formData.get("telefone") as string;

  await prisma.cliente.create({
    
    data: {
      nome ,
      telefone,
    },
  });
  redirect("/clientes");
}