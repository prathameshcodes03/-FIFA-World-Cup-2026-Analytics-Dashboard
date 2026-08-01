require("dotenv").config();


const app = require("./src/app");
const env = require('dotenv')
const Port = process.env.PORT;
const readCSV = require("./src/utils/csvReader");




app.get("/", async (req, res) => {

    try {

        const data = await readCSV();

        res.json({

            totalMatches: data.length,

            firstMatch: data[0]

        });

    } catch (error) {

        res.status(500).json(error);

    }

});





function connectServer(){
    try{

        app.listen(Port,()=>{
            console.log(`Server started at ${Port}`);
            
        })

    }

    catch(err){
        console.log(`An Error Occured :${err}`);
        
    }

}


connectServer();