/*
  Warnings:

  - You are about to drop the `transactionDetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "transactionDetail";

-- CreateTable
CREATE TABLE "transactionDetails" (
    "transactionId" SERIAL NOT NULL,
    "bId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "transtype" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "geograhicLocation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transactionDetails_pkey" PRIMARY KEY ("transactionId")
);
