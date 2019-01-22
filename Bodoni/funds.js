var config = {
	apiKey: "AIzaSyC2oMkn2Z9Zt5B2LH9Dav01HvhbDY3Ii8k",
	authDomain: "indestructibletype-hitcount.firebaseapp.com",
	databaseURL: "https://indestructibletype-hitcount.firebaseio.com",
	projectId: "indestructibletype-hitcount",
	storageBucket: "indestructibletype-hitcount.appspot.com",
	messagingSenderId: "94225162584"
};
firebase.initializeApp(config);
	const rootRef = firebase.database().ref();
	const moneyCountRef = rootRef.child("moneyCount");
	let getHistory = new Promise(function (resolve, reject){
		let obj = {};
		moneyCountRef.orderByChild("page").equalTo(location.pathname).once("value", function (snapshot){
			snapshot.forEach(function (child){
				obj = {
					key: child.key,
					count: child.val().dollars,
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
				key = moneyCountRef.push().key;
				pastcounts = 0;
			}
			refstot = document.referrer + " " + referrer;
			inputamount = parseInt(document.getElementById("dollarinput").value);
			counts = pastcounts + inputamount;
			document.getElementById("MoneyTotal").innerHTML = "$" + pastcounts;
			document.getElementById("BodoniProgress").value = pastcounts;
		}).catch(function (fromReject) {
			console.log(error);
		})

function updateMoney() {
		getHistory.then(function(fromResolve){
			var key = fromResolve.key;
			var pastcounts = fromResolve.count;
			var referrer = fromResolve.referrer;
			if (key == undefined){
				key = moneyCountRef.push().key;
				pastcounts = 0;
			}
			refstot = document.referrer + " " + referrer;
			inputamount = parseInt(document.getElementById("dollarinput").value);
			counts = pastcounts + inputamount;
			var postData = {
				page: location.pathname,
				dollarq: counts,
				dollars: pastcounts,
				lastvisit: firebase.database.ServerValue.TIMESTAMP,
				inputamount: inputamount
			}
			var updates = {};
			updates["/moneyCount/" + key] = postData;
			rootRef.update(updates);
		}).catch(function (fromReject) {
			console.log(error);
		})
}
