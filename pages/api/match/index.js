import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });
// POST /api/match
export default async function handle(req, res) {
  const { name } = req.body;
  const result = await prisma.match.create({
    data: {
      name: name,
    },
  });
  res.json(result);
}
