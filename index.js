const express = require("express");
require("dotenv").config();
const App = express();

const PORT = process.env.PORT || 5001;

App.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});