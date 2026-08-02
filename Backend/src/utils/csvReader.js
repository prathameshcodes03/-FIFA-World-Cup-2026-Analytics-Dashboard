const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const readCSV = () => {
    return new Promise((resolve, reject) => {

        const results = [];

        const filePath = path.join(
            __dirname,
            "../../../analytics/matches_cleaned.csv"
        );

        console.log("CSV Path:", filePath);
        console.log("File Exists:", fs.existsSync(filePath));

        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", (row) => {
                results.push(row);
            })
            .on("end", () => {
                console.log("Rows Loaded:", results.length);
                resolve(results);
            })
            .on("error", (error) => {
                console.error("CSV Error:", error);
                reject(error);
            });

    });
};

module.exports = readCSV;