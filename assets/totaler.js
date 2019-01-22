if (location.hostname.toLowerCase() == "indestructibletype.com") {
	var config = {
		apiKey: "AIzaSyC2oMkn2Z9Zt5B2LH9Dav01HvhbDY3Ii8k",
		authDomain: "indestructibletype-hitcount.firebaseapp.com",
		databaseURL: "https://indestructiletype-hitcount.firebaseio.com",
		projectId: "indestructibletype-hitcount",
		storageBucket: "indestructibletype-hitcount.appspot.com",
		messagingSenderId: "94225162584"
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
