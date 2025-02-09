-- CreateTable
CREATE TABLE "login" (
    "id" SERIAL NOT NULL,
    "uName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactionDetail" (
    "transactionId" SERIAL NOT NULL,
    "bId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "transtype" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "geograhicLocation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transactionDetail_pkey" PRIMARY KEY ("transactionId")
);

-- CreateTable
CREATE TABLE "business" (
    "bId" SERIAL NOT NULL,
    "bName" TEXT NOT NULL,
    "bType" TEXT NOT NULL,
    "AvgRevenue" DOUBLE PRECISION NOT NULL,
    "bLocation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "business_pkey" PRIMARY KEY ("bId")
);

-- CreateIndex
CREATE INDEX "login_name_idx" ON "login"("name");