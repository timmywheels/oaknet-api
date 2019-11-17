const express = require('express');

const app = express();

require('./routes/apiRoutes.js')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('app listening on port', PORT);
});
