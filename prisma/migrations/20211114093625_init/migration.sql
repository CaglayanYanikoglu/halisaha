-- CreateEnum
CREATE TYPE "Type" AS ENUM ('NORMAL', 'JF');

-- CreateTable
CREATE TABLE "matches" (
    "id" SERIAL NOT NULL,
    "match_title" TEXT NOT NULL,
    "match_location" TEXT,
    "match_type" "Type" NOT NULL DEFAULT E'NORMAL',
    "participant_limit" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "match_date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "players" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "match_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "player_match_unique_constraint" ON "players"("name", "match_id");
