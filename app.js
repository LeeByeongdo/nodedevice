const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const isMobileHeader = req.header("isMobile");
  const isEmployeeHeader = req.header("isEmployee");
  if (
    isMobileHeader &&
    (isMobileHeader === true || isMobileHeader === "true")
  ) {
    if (
      isEmployeeHeader &&
      (isEmployeeHeader === true || isEmployeeHeader === "true")
    ) {
      res.sendFile("/img/employee_mobile.jpg", { root: __dirname });
    } else {
      res.sendFile("/img/mobile.jpg", { root: __dirname });
    }
  } else {
    if (
      isEmployeeHeader &&
      (isEmployeeHeader === true || isEmployeeHeader === "true")
    ) {
      res.sendFile("/img/employee_desktop.jpg", { root: __dirname });
    } else {
      res.sendFile("/img/desktop.jpg", { root: __dirname });
    }
  }
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
