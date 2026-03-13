import { Request, Response } from 'express';

export const getSummary = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Get analytics summary' });
};
