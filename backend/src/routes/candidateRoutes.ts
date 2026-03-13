import { Router } from 'express';
import * as candidateController from '../controllers/candidateController';

const router = Router();

router.get('/', candidateController.getAllCandidates);
router.get('/:id', candidateController.getCandidateById);
router.post('/', candidateController.createCandidate);

export default router;
