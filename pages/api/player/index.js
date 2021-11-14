import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

// POST /api/player
export default async function handle(req, res) {
  const { name, matchId } = req.body;
  const result = await prisma.player.create({
    data: {
      name: name,
      match_id: matchId,
    },
  });
  res.json(result);
}
