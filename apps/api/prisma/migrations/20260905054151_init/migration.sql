-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'SUSPENDED', 'DELETED');

-- CreateEnum
CREATE TYPE "ConsentType" AS ENUM ('TERMS', 'PRIVACY', 'HEALTH_DATA');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consent_records" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "type" "ConsentType" NOT NULL,
    "version" TEXT NOT NULL,
    "grantedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revokedAt" TIMESTAMP(3),

    CONSTRAINT "consent_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "health_profiles" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "health_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cycles" (
    "id" UUID NOT NULL,
    "healthProfileId" UUID NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "cycleLength" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cycles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "consent_records_userId_idx" ON "consent_records"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "health_profiles_userId_key" ON "health_profiles"("userId");

-- CreateIndex
CREATE INDEX "cycles_healthProfileId_startDate_idx" ON "cycles"("healthProfileId", "startDate");

-- AddForeignKey
ALTER TABLE "consent_records" ADD CONSTRAINT "consent_records_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "health_profiles" ADD CONSTRAINT "health_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cycles" ADD CONSTRAINT "cycles_healthProfileId_fkey" FOREIGN KEY ("healthProfileId") REFERENCES "health_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
