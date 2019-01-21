	var config = {
		apiKey: "AIzaSyCYwsg7YgxHmHATY1epSmG8PfmT3wDTIp8",
		authDomain: "indestructiletype-hitcount.firebaseapp.com",
		databaseURL: "https://indestructiletype-hitcount.firebaseio.com",
		projectId: "indestructiletype-hitcount",
		storageBucket: "indestructiletype-hitcount.appspot.com",
		messagingSenderId: "324038593433"
	};
	firebase.initializeApp(config);
	const rootRef = firebase.database().ref();
	const moneyCountRef = rootRef.child("moneyCount");
	let getHistory = new Promise(function (resolve, reject){
		let obj = {};
		moneyCountRef.orderByChild("page").equalTo("/BuyBodoni.html").once("value", function (snapshot){
			snapshot.forEach(function (child){
				obj = {
					key: child.key,
					count: child.val().dollars,
					referrer: child.val().lastreferrer,
					dollarq: child.val().dollarq
				}
			})
			if (obj) {
				resolve(obj);
			} else {
				reject(error);
			}
		})
	});

	getHistory.then(function(fromResolve){
		var key = fromResolve.key;
		var pastcounts = fromResolve.count;
		var referrer = fromResolve.referrer;
		var dollarq = fromResolve.dollarq;
		if (key == undefined){
			key = moneyCountRef.push().key;
			pastcounts = 0;
		}
		refstot = document.referrer + " " + referrer;
		counts = pastcounts + dollarq;
		var postData = {
			page: "/BuyBodoni.html",
			dollars: counts,
			lastvisit: firebase.database.ServerValue.TIMESTAMP,
			inputamount: 0
		}
		var updates = {};
		updates["/moneyCount/" + key] = postData;
		rootRef.update(updates);
	}).catch(function (fromReject) {
		console.log(error);
	})


	if (location.hostname.toLowerCase() == "indestructibletype.com") {
		var config = {
			apiKey: "AIzaSyCYwsg7YgxHmHATY1epSmG8PfmT3wDTIp8",
			authDomain: "indestructiletype-hitcount.firebaseapp.com",
			databaseURL: "https://indestructiletype-hitcount.firebaseio.com",
			projectId: "indestructiletype-hitcount",
			storageBucket: "indestructiletype-hitcount.appspot.com",
			messagingSenderId: "324038593433"
		};
		firebase.initializeApp(config);
		const rootRef = firebase.database().ref();
		const pageCountsRef = rootRef.child("pageCounts");
		let getHistory = new Promise(function (resolve, reject){
			let obj = {};
			pageCountsRef.orderByChild("page").equalTo(location.pathname).once("value", function (snapshot){
				snapshot.forEach(function (child){
					obj = {
						key: child.key,
						count: child.val().count,
						referrer: child.val().lastreferrer
					}
				})
				if (obj) {
					resolve(obj);
				} else {
					reject(error);
				}
			})
		});
		getHistory.then(function(fromResolve){
			var key = fromResolve.key;
			var pastcounts = fromResolve.count;
			var referrer = fromResolve.referrer;
			if (key == undefined){
				key = pageCountsRef.push().key;
				pastcounts = 0;
			}
			counts = pastcounts + 1;
			refstot = document.referrer + " " + referrer;
			var postData = {
				page: location.pathname,
				count: counts,
				lastvisit: firebase.database.ServerValue.TIMESTAMP,
				lastreferrer: refstot
			}
			var updates = {};
			updates["/pageCounts/" + key] = postData;
			rootRef.update(updates);
		}).catch(function (fromReject) {
			console.log(error);
		})
	}
