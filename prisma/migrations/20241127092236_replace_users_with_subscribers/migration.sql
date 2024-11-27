/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Subscribers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subscribers" ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";
