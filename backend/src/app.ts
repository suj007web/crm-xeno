import express, {Express} from 'express';
import { setupSwagger } from './docs/swagger';
import userRouter from './apis/routes/user.route';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users",userRouter)

setupSwagger(app);

export default app;