"use server";

import { prisma} from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteCliente(formData: FormData) {
    const id = formData.get("id") as string;

    await prisma.cliente.delete({
        where: {
         id,
        },
    });
     revalidatePath("/clientes");
    
}
