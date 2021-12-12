import express, {Application} from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { connect } from "./database";
import routes from "../routes";
dotenv.config();

class App {
    private app: Application;
    readonly port: number;
    constructor(){
        this.port = +process.env.PORT! || 8000;
        this.app = express();
        this.routes();
        this.middlewares();
        const userDb = process.env.USER_DB!;
        const passDb = process.env.PASS_DB!;
        const hostDb = process.env.HOST_DB!;
        const portDb = process.env.PORT_DB!;
        const nameDb = process.env.NAME_DB!;
        connect(userDb, passDb,hostDb ,portDb, nameDb);
    }

    private middlewares(){
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    private routes(){
        this.app.use("/api", routes);
    }
    start(){
        this.app.listen(this.port, () =>{
            console.log(`app running in port ${this.port}`);
        });
    }
}
export default App;