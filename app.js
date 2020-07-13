const express = require('express')
const {
    spawn
} = require('child_process');
const app = express()
const PORT = process.env.PORT || 3000;
const fetch = require('node-fetch');
require('dotenv').config();
const file = require('./TestIssues.json');
const user = 'ceceliacreates';
const repo = 'APITools';

app.get('/', (req, res) => {
    file.forEach(issue => {
        fetch(`https://api.github.com/repos/crusher-pb/Repository1/issues`, {
            method: 'post',
            body:    JSON.stringify(issue),
            headers: {'Content-Type': 'application/json', 'Authorization': `token ${process.env.TOKEN}`}
        })
        .then(res =>  res.json("I have Completed"))
        .then(json => {
            console.log(`Issue created at ${json.url}`)
        })
    })
})

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

        //     var dataToSend;
        //     // spawn new child process to call the python script
        //     const python = spawn('python3', ['script.py', 'https://github.com/crusher-pb/Repository1']);
        //     // collect data from script
        //     python.stdout.on('data', function (data) {
        //         console.log('Pipe data from python script ...');
        //         dataToSend = data.toString();
        //     });
        //     // in close event we are sure that stream from child process is closed
        //     python.on('close', (code) => {
        //         console.log(`child process close all stdio with code ${code}`);
        //         // send data to browser
        //         console.log(dataToSend)
        //         res.send(dataToSend)
        //     });

        // })

