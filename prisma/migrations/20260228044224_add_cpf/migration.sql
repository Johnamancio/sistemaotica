/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "cpf" VARCHAR(11) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpf_key" ON "Cliente"("cpf");
