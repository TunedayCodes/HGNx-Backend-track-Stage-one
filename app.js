const express = require("express");
const moment = require("moment-timezone")

const app = express();

const HOST = "localhost";
const PORT = "8080";

app.get("/",(req,res)=>{
    const slackName = req.query.slack_name||"Tunde Fadipe";
    const track = req.query.track || "Backend";

    const dayOfWeek = moment().tz("UTC").format("dddd");
    const currentUTCtime = moment().tz('UTC').format("YYYY-MM-DDTHH:mm:ss[Z]")

    const githubFileURL = "https://github.com/TunedayCodes/HGNx-Backend-track-Stage-one/blob/main/app.js";
    const githubRepoURL = "https://github.com/TunedayCodes/HGNx-Backend-track-Stage-one.git";

    const data = {
        "slack_name" : slackName,
        "current_day" : dayOfWeek,
        "utc_time" : currentUTCtime,
        "track" : track,
        "github_file_url":githubFileURL,
        "github_repo_url" : githubRepoURL,
        "status" : 200
    };

    res.status(200).json(data)
})

app.listen(PORT,()=>{
    console.log(`Server has started on ${HOST}: ${PORT}`)
})