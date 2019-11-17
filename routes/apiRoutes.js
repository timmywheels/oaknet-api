module.exports = app => {

	app.get('/api/status', (req, res) => {
	    const uptime = process.uptime();
	    const timestamp = Date.now();
	    res.send({ status: 'OK', uptime, timestamp });
	});

}
