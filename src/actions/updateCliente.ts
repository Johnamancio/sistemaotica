"use server";

import { prisma} from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function updateCliente(formData: FormData) {
    const id = formData.get("id") as string;
    const nome = (formData.get("nome") as string)?.trim();
    const telefone = (formData.get("telefone") as string)?.trim();

    if (!nome || !telefone) {
        throw new Error("Nome e telefone são obrigatórios");
    }

    await prisma.cliente.update({
        where: { id },
        data: {
            nome,
            telefone,
        },
    });
    
redirect("/clientes");
}