// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {prisma} from '../../lib/prisma'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const {title , content}= req.body

  try {
    await prisma.post.create({
      data:
        {
        title,
        content,
      },


    });
    res.status(200).json({message:  "note Created"})
  } catch (error) {
    console.log("failed to created");
    
  }
}
 