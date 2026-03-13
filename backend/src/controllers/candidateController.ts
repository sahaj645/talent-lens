import { Request, Response } from 'express';
import { candidates } from '../utils/mockData';

export const getAllCandidates = (req: Request, res: Response) => {
  res.status(200).json(candidates);
};

export const getCandidateById = (req: Request, res: Response) => {
  const candidate = candidates.find(c => c.id === req.params.id);
  if (candidate) {
    res.status(200).json(candidate);
  } else {
    res.status(404).json({ message: 'Candidate not found' });
  }
};

export const createCandidate = (req: Request, res: Response) => {
  const newCandidate = { ...req.body, id: (candidates.length + 1).toString() };
  candidates.push(newCandidate);
  res.status(201).json(newCandidate);
};
