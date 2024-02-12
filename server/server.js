const patientFormRoute= require("./router/patientFormRouter");
const healthAIRoute= require("./router/healthAIRouter");
const doctorRoute=require("./router/doctorRouter");
const medRoute=require("./router/medRouter");

const express=require("express");
const cors=require("cors");
const app=express();

const connectDb=require("./utils/db");



const corsOptions={
    origin:"*",
    methods: "GET, POST, PUT, DELETE,PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());


app.use('/api/form',patientFormRoute);
app.use('/api/form',healthAIRoute);
app.use('/api/data',doctorRoute);
app.use('/api/data',medRoute);


const PORT=7000;


connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port: ${PORT} `);
    });
});