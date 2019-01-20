if (location.hostname.toLowerCase() == "indestructiletype.com") {
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
					count: child.val().count
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
		if (key == undefined){
			key = pageCountsRef.push().key;
			pastcounts = 0;
		}
		counts = pastcounts + 1;
		var postData = {
			page: location.pathname,
			count: counts,
			lastvisit: firebase.database.ServerValue.TIMESTAMP,
			lastreferrer: document.referrer
		}
		var updates = {};
		updates["/pageCounts/" + key] = postData;
		rootRef.update(updates);
	}).catch(function (fromReject) {
		console.log(error);
	})
}
