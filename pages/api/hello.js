// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as nbt from 'prismarine-nbt';

export default async function handler(req, res) {
  const { method } = req;
  if (method !== 'POST') return res.status(405);
  try {
    console.log(req.body)
    const { parsed, type } = await nbt.parse(Buffer.from(req.body));
    res.status(200).json({ error:false, parsed, type });
  } catch(e) {
    res.status(200).json({ error: true, statusMessage: String(e) });
    //console.error(e)
  }
}
