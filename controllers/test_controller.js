'use strict';

// import /models/burgers.js
var test = require('./../models');

// export the function with routes
// app is passed in from server.js
// all routes listen to / route
module.exports = function(app) {
	app.get('/', function(req, res) {
        // test.Team.findAll({}).then(function(testDB) {
        //     // console.log(testDB);
        //     var teams = [];
        //     for (var i = 0; i < testDB.length; i++) {
        //         teams.push(testDB[i].dataValues);
        //     }
        //     console.log(teams);
        // });

        // test.Player.findAll({}).then(function(testDB) {
        //     var players = [];
        //     for (var i = 0; i < testDB.length; i++) {
        //         players.push(testDB[i].dataValues);
        //     }
        //     console.log(players);
        // });

        // test.Stat.findAll({}).then(function(testDB) {
        //     var stats = [];
        //     for (var i = 0; i < testDB.length; i++) {
        //         stats.push(testDB[i].dataValues);
        //     }
        //     console.log(stats);
        // });

        // test.Player_stat.findAll({}).then(function(testDB) {
        //     var player_stats = [];
        //     for (var i = 0; i < testDB.length; i++) {
        //         player_stats.push(testDB[i].dataValues);
        //     }
        //     console.log(player_stats);
        // });

        test.Player_team.findAll({}).then(function(testDB) {
            var player_team = [];
            for (var i = 0; i < testDB.length; i++) {
                player_team.push(testDB[i].dataValues);
            }
            console.log(player_team);
        });
	});

	// app.post('/', function(req, res) {
	// 	test.Burger.create({
	// 		burger_name: req.body.burger_name
	// 	}).then(function(dbBurger) {
	// 		res.redirect('/');
	// 	});
	// });

	// app.put('/', function(req, res) {
	// 	test.Burger.update({
	// 		devoured: true
	// 	}, {
	// 		where: {
	// 			id: req.body.id
	// 		}
	// 	}).then(function(dbBurger) {
	// 		res.redirect('/');
	// 	});
	// });
};