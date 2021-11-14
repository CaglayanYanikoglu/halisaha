export default async function handle(req, res) {
  const matchId = req.query.id;

  if (req.method === "GET") {
    handleGET(matchId, res);
  } else if (req.method === "DELETE") {
    handleDELETE(matchId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// GET /api/match/:id
async function handleGET(matchId, res) {
  const post = await prisma.match.findUnique({
    where: { id: Number(matchId) },
  });
  res.json(post);
}

// DELETE /api/match/:id
async function handleDELETE(matchId, res) {
  const post = await prisma.match.delete({
    where: { id: Number(matchId) },
  });
  res.json(post);
}
