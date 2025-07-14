let jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
	// let greenRoutes = ["login", "register"]
	// for (let i = 0; i < greenRoutes.length; i++) {
    //     if (req.path.indexOf(greenRoutes[i]) != -1) {
    //         return next();
    //     }
    // }
	
	// let authorization = req.get("Authorization");

	// let token;
	// if(authorization) {
	// 	console.log("authorization:", authorization);
	// 	token = authorization.split(' ')[1];
	// }

	// console.log("token:", token);
	// if(token) {
	// 	jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, decoded) {
	// 		if(err) {
	// 			console.log(err);
	// 			res.status(400).send({ message: "unauthenticated" });
	// 		}

	// 		console.log("decoded:", decoded);
			
	// 		return next();
	// 	})
	// } else {
	// 	return res.status(400).send({ message: "unauthenticated" });
	// }
	return next();
}