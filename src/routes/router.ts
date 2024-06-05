import { Router } from 'express';
import { api_test, sendMail } from '../controllers/api_controllers';

const router = Router();

router.get('/', api_test);
router.post('/sendMail', sendMail);

export = router;
