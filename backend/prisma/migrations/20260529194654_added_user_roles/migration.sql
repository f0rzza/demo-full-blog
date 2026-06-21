-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'editor', 'user');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'user';
