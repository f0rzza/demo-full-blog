/*
  Warnings:

  - The values [admin,editor,user] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('ADMIN', 'EDITOR', 'USER');
ALTER TABLE "public"."User" ALTER COLUMN "role" DROP DEFAULT;

-- Note: genereted during migration creation.
-- ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");

-- Note2: since database contains data with the old roles, use 'upper' function to convert them to the new format.
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING (upper("role"::text)::"Role_new");

ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "public"."Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'USER';
COMMIT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'USER';
