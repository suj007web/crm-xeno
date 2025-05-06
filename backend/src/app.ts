import express, {Express} from 'express';
import { setupSwagger } from './docs/swagger';
import userRouter from './apis/routes/user.route';
import uploadRouter from './apis/routes/upload.route';
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users",userRouter)
app.use("/api/uploads", uploadRouter)

setupSwagger(app);

export default app;