import { PrismaClient } from "@prisma/client";

export default async function (req, res) {
  const prisma = new PrismaClient({ log: ["query"] });
  try {
    const matches = await prisma.match.findMany({
      take: 1,
      where: {
        status: {
          not: -1,
        },
        match_type: req.query.type || 'NORMAL'
      },
      orderBy: {
        id: "desc",
      },
    });
    const players = await prisma.player.findMany({
      where: {
        match_id: matches[0].id
      },
      orderBy: {
        id: "desc",
      },
    });
    res.status(200);
    res.json({ matches, players });
  } catch (e) {
    res.status(500);
    res.json({ error: "Unable to fetch match" });
  }
}
