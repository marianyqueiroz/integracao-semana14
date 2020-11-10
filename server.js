const app = require("./src/app");
const port = 8000;

app.listen(port, () => {
    console.log(`app is running on the port ${port}`);
});