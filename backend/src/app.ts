import express, {Express} from 'express';
import { setupSwagger } from './docs/swagger';
import userRouter from './apis/routes/user.route';
import uploadRouter from './apis/routes/upload.route';
import cors from 'cors';
const app: Express = express();
app.use(cors({
    origin : "*"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users",userRouter)
app.use("/api/uploads", uploadRouter)


setupSwagger(app);

export default app;