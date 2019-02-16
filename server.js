const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

app.listen(PORT, function() {
   console.log('App listening on PORT: ' + PORT);
});

