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

        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", (row) => {
                results.push(row);
            })
            .on("end", () => {
                resolve(results);
            })
            .on("error", (error) => {
                reject(error);
            });

    });
};

module.exports = readCSV;