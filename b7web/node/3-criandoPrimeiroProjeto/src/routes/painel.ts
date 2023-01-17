import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Pagina Inicial do Painel')
})

router.get('/noticias', (req: Request, res: Response) => {
  res.send('Pagina Noticias do Painel')
})

export default router