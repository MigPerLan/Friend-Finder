var friends = require('../app/data/friends');

module.exports = function (app, path) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        var user = req.body;
        var match;
        console.log(user);
        // compare
        var difference = 40;
        // loop through friends
        friends.forEach(function (friend) {
            var total = 0;
            friend.scores.forEach(function (score, i) {
                total += Math.abs(parseInt(score) - parseInt(user.scores[i]));

            });
            console.log(`compatibility (${total})`);
            if (total < difference) {
                difference = total;
                match = friend;
            }
            console.log(`Your match is ${match.name}`);
        });
        friends.push(user);
        res.json(match);
    });
};

