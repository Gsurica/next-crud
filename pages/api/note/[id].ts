import { prisma } from "../../../lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler (req: NextApiRequest, res: NextApiResponse) {

  const noteId = req.query.id

  if (req.method === "DELETE") {
    const note = await prisma.note.delete({
      where: {id: Number(noteId)}
    })
    res.json(200)
  } else {
    console.log("Note could not be created")
  }

}
