// 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");
const bodyParser = require("body-parser");
const locationRoutes = require("./routes/locatinDetails");
const proposedLocationRoutes = require("./routes/proposedLocation");
const brandSaleRoutes = require("./routes/brandSalesAnalysis");
const outletSaleRoutes= require("./routes/outletSalesAnalysis");
const commercialRoutes= require("./routes/commercials");
const departmentRecommendationRoutes= require("./routes/departmentRecommendation");
const finalRecommendationRoutes= require("./routes/finalRecommendation");
const profitLossProjectionRoutes = require("./routes/profitLossProjection");
const interviewToolkitRoutes = require("./routes/interviewToolkit");
const interviewChecklistRoutes = require("./routes/interviewChecklist");
const backgroundCheckRoutes=require("./routes/backgroundCheck");
const interviewquestionresponseRoutes=require("./routes/interviewquestionResponse");
const evaluationAndHiringProcessRoutes =require("./routes/evaluationAndHiringProcess");
const salaryAndNoticeDetailsRoutes=require("./routes/salaryAndNoticeDetails");
const usersRoute = require("./routes/users");
const adminsRoute = require("./routes/admin");









const app = express();


mongoose.connect(config.mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongoDB connection error"));
app.use(cors());

app.use(bodyParser.json());
app.get("/", async (req, res) => {
  res.send("the server is running");
});
// Routes

app.use("/api/locations", locationRoutes);
app.use("/api/proposed-locations",proposedLocationRoutes );
app.use("/api/brand-sales",brandSaleRoutes );
app.use("/api/outletsales",outletSaleRoutes );
app.use("/api/commercials",commercialRoutes );
app.use("/api/departmentrecommendation",departmentRecommendationRoutes );
app.use("/api/finalrecommendation",finalRecommendationRoutes );
app.use("/api/profitlossprojection",profitLossProjectionRoutes );
app.use("/api/interviewtoolkit",interviewToolkitRoutes );
app.use("/api/interviewchecklist",interviewChecklistRoutes );
app.use("/api/backgroundcheck",backgroundCheckRoutes );
app.use("/api/interviewquestionresponse",interviewquestionresponseRoutes );
app.use("/api/evaluationandhiringprocess",evaluationAndHiringProcessRoutes );
app.use("/api/salaryandnoticedetails",salaryAndNoticeDetailsRoutes );
app.use("/api/users", usersRoute);
app.use("/api/admins", adminsRoute);
















app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
