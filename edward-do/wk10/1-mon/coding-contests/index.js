const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const _ = require('underscore');
const { first } = require('underscore');

const server = express();
server.set('view-engine', ejs);
const PORT = 6969;

server.get('/', (req, res) => {
	axios.get('https://kontests.net/api/v1/all').then((response) => {
		console.log(response);
		randomContest = _.sample(response.data)
		res.render('home.ejs', { 
			name: randomContest.name, 
			url: randomContest.url, 
			startTime: randomContest.start_time, 
			endTime: randomContest.end_time, 
			duration: randomContest.duration, 
			site: randomContest.site, 
			withinADay: randomContest.in_24_hours, 
			status: randomContest.status 
		});
	})
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }/`))