import express from 'express';
import { options } from './utils/commander.js';
import router from './routes/mocks.router.js';
import { connectDB } from './config/db.js';



const app = express();

// middlewares básicos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/mocks', router);

connectDB();
app.listen(options.port, () => {
    console.log(`Server is running on http://localhost:${options.port}`);
});

