import express, {Express} from 'express';
import { setupSwagger } from './docs/swagger';
import userRouter from './apis/routes/user.route';
import uploadRouter from './apis/routes/upload.route';
import customerRouter from './apis/routes/customers.route';
import cors from 'cors';
const app: Express = express();
app.use(cors({
    origin : "*"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users",userRouter)
app.use("/api/uploads", uploadRouter)
app.use("/api/customers", customerRouter)


setupSwagger(app);

export default app;