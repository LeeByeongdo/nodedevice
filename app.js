const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const isMobileHeader = req.header("isMobile");
  if (
    isMobileHeader &&
    (isMobileHeader === true || isMobileHeader === "true")
  ) {
    res.sendFile("/img/mobile.jpg", { root: __dirname });
  } else {
    res.sendFile("/img/desktop.jpg", { root: __dirname });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
