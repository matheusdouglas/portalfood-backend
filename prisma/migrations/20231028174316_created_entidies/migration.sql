/*
  Warnings:

  - Added the required column `plate` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "students" ADD COLUMN     "plate" TEXT NOT NULL;
