const express = require("express");

const cors = require("cors")

const connectMongoDB = require('./db.js')

const multer = require('multer');
const path = require('path');


const app = express();

require("dotenv").config()

app.use(cors())

connectMongoDB()

app.use(express.json())

const DonateMoneys = require('./modal/donate.js');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './donation');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
const upload = multer({ storage: storage });
app.post('/api/v1/donate', upload.single('UpiUploadImg'), async (req, res) => {
    try {
      const newDonation = new DonateMoneys({
        FullName: req.body.FullName,
        MobileNumber: req.body.MobileNumber,
        City: req.body.City,
        UpiMethod: req.body.UpiMethod,
        UpiUploadImg: req.file.path,
        Description: req.body.Description,
      });
      const savedDonation = await newDonation.save();
      res.json(savedDonation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
app.get('/api/v1/donate', async (req, res) => {
    try {
        const donations = await DonateMoneys.find();
        res.json(donations);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});
  

const MemberSlider = require("./modal/memberslider.modal.js");
app.get("/api/v1/memberslider", async (req, res) => {
    try {
        const mslider = await MemberSlider.find();
        console.log("Member Slider", mslider);
        res.json(mslider);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const ActivityLatest = require("./modal/latestActivity.js");
app.get("/api/v1/latestactivities", async (req, res) => {
    try {
        const latestactivities = await ActivityLatest.find();
        console.log("latestactivities", latestactivities);
        res.json(latestactivities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const ActivityJobCard = require("./modal/activityJobCard.js");
app.get("/api/v1/activityJobCard", async (req, res) => {
    try {
        const activityJobCard = await ActivityJobCard.find();
        console.log("activityJobCard", activityJobCard);
        res.json(activityJobCard);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const AboutUsData = require("./modal/aboutUsData.js");
app.get("/api/v1/aboutUsData", async (req, res) => {
    try {
        const aboutUsData = await AboutUsData.find();
        console.log("aboutUsData", aboutUsData);
        res.json(aboutUsData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const ObjectiveData = require("./modal/objective.js");
app.get("/api/v1/objectiveData", async (req, res) => {
    try {
        const objectiveData = await ObjectiveData.find();
        console.log("objectiveData", objectiveData);
        res.json(objectiveData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const User = require('./modal/user.js')
app.post("/api/v1/login", async (req, resp) => {
    console.log(req.body);
    const email = req.body.Email;
    console.log("Email>>>",email);
    const password = req.body.Password;
    console.log("Password>>>",password);
    if (password && email){
        let user = await User.findOne({ 
            Email: email, 
            Password: password 
        }).select("-Password");
        console.log("userDaatatata>>>",user);
        if(user){
            resp.send(user);
        } else {
            resp.send({ result: "No user found!" });
        }
    } else {
        resp.send({ result: "Invalid parameters!" });
    }
});

const ApplyMember = require('./modal/ApplyMember.js');
const storageapplymember = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './applymember');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  const uploadapplymember = multer({ storage: storageapplymember });
  app.post('/api/v1/applyMembers', uploadapplymember.single('UpiUploadImg'), async (req, res) => {
    console.log("req data", req.body);
    try {
      const newApplyMember = new ApplyMember({
        FullName: req.body.FullName,
        Gender: req.body.Gender,
        MobileNumber: req.body.MobileNumber,
        Email: req.body.Email,
        City: req.body.City,
        District: req.body.District,
        State: req.body.State,
        UpiMethod: req.body.UpiMethod,
        UpiUploadImg: req.file.path,
      });
      const savedApplyMember = await newApplyMember.save();
      res.json(savedApplyMember);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

app.get("/api/v1/allMembers", async (req, res) => {
    try {
        const allMembers = await ApplyMember.find();
        console.log("ApplyMember", allMembers);
        res.json(allMembers); 
    } catch (error) {
        console.error("Error fetching all members:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


const YourProblems = require("./modal/yourProblem.js");
app.post('/api/v1/problemForm', async (req,res)=>{
    console.log("Request body", req.body);
	try{
		console.log(req.body);
		await YourProblems.create(req.body);
		res.redirect("/");
	}
	catch(e){
		console.log(e);
		res.redirect('/')
	}
});

const UpcomingEvents = require("./modal/ourProject.js");
app.post("/api/v1/upcomingevents", async (req, res) => {
  console.log("data>>>>>", req.body);
  try {
    const {imgUrl, cardTitle, Description } = req.body;
    const newEvent = new UpcomingEvents({
      imgUrl,
      cardTitle,
      Description,
    });
    await newEvent.save();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/api/v1/upcomingevents", async (req, res) => {
    try {
        const upcomingEvents = await UpcomingEvents.find();
        console.log("UpcomingEvents", upcomingEvents);
        res.json(upcomingEvents); 
    } catch (error) {
        console.error("Error fetching UpcomingEvents:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

const PORT = process.env.PORT || 4009
// Making Build Folder as Public 
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () =>{
	console.log("server is running....", PORT)
})