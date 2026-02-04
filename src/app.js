import express from 'express';
import { options } from './utils/commander.js';
import router from './routes/mocks.router.js';
import { connectDB } from './config/db.js';
import adoptionRouter from './routes/adoption.router.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpecs } from './config/swagger.js';
import usersRouter from './routes/users.router.js';


const app = express();

// middlewares básicos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/mocks', router);
app.use('/api/adoptions', adoptionRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/api/users', usersRouter);
app.get('/', (req, res) => {
    res.send('API Backend Test Project running OK');
    });



connectDB();
if (process.env.NODE_ENV !== 'test') {
    app.listen(options.port, () => {
    console.log(`Server is running on http://localhost:${options.port}`);
    });
    }

export default app;