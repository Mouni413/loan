const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const XLSX = require("xlsx");
const UserModel = require("./model/User");
const app = express();
const upload = multer({ dest: "temp/" });
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user");

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((error) => res.json(error));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Login Successful");
        } else {
          res.json("Invalid Credentials");
        }
      } else {
        res.json("user not found");
      }
    })
    .catch((err) => {
      res.json(err);
    });
});
const uploadsFolder = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsFolder)) {
  fs.mkdirSync(uploadsFolder);
}

// Endpoint to handle file uploads
app.post("/upload", upload.any(), (req, res) => {
  try {
    const resultsArray = [];

    req.files.forEach((file) => {
      const tempPath = file.path;
      const targetPath = path.join(uploadsFolder, file.originalname);

      // Move the file to the desired location
      fs.renameSync(tempPath, targetPath);

      // Read the Excel file
      const workbook = XLSX.readFile(targetPath);
      const sheetNames = workbook.SheetNames;

      // Loop through each sheet in the workbook
      sheetNames.forEach((sheetName) => {
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Loop through each row in the sheet and extract the necessary fields
        jsonData.forEach((row) => {
          // Assuming you want to extract 'field1' and 'field2' from each row
          const extractedData = {
            field1: row["Name of the Company"], // Replace with actual field name
          };
          resultsArray.push(extractedData);
        });
      });
    });

    // Send the extracted data as response or process further as needed
    res.status(200).json(resultsArray);
  } catch (error) {
    console.error("Error processing files:", error);
    res.status(500).send("Error processing files");
  }
});

app.listen(3001, () => {
  console.log("server is running on the port 3001");
});
