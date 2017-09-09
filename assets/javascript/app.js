
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD3n4XTMBKdvtnjmrao-4lrjlV59uq0xeI",
    authDomain: "traindata-53d95.firebaseapp.com",
    databaseURL: "https://traindata-53d95.firebaseio.com",
    projectId: "traindata-53d95",
    storageBucket: "",
    messagingSenderId: "215646211193"
  };
  firebase.initializeApp(config);


    var dataRef = firebase.database();

    $("#add-train").on("click", function(event) {
    	event.preventDefault();

    	var trainName = $("#name-input").val().trim();
    	var destination = $("#destination-input").val().trim();
    	var firstTrainTime = $("#first-train-time-input").val().trim();
    	var frequency = $("#frequency-input").val().trim();

    	var newTrain = {
    		name: trainName,
    		destination: destination,
    		time: firstTrainTime,
    		frequency: frequency	
    	};

        dataRef.ref().push(newTrain);

        console.log(newTrain.name);
        console.log(newTrain.destination);
        console.log(newTrain.time);
        console.log(newTrain.frequency);

        $("name-input").val("");
        $("#destination-input").val("");
        $("#first-train-time-input").val("");
        $("#frequency-input").val("");
    });

    dataRef.ref().on("child_added", function(snapshot, prevChildKey) {

    	console.log(snapshot.val());

        var trainName = snapshot.val().name;
    	var destination = snapshot.val().destination;
    	var firstTrainTime = snapshot.val().time;
    	var frequency = snapshot.val().frequency;

        console.log(trainName);
        console.log(destination);
        console.log(firstTrainTime);
        console.log(frequency);

        var firstTrainTimeNice = moment.unix(firstTrainTime).format("HH:mm a")

        var nextArrival = moment.unix

        var minutesAway = moment.unix

        $("#train-schedule > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + 
                                    "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");
    },	function(errorObject) {
    	console.log("Errors handled: " + errorObject.code);
    });

    dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(childSnapshot){

        $("#name-display").html(snapshot.val().trainName);
        $("#destination-display").html(snapshot.val().destination);
        $("#firstTrainTime-display").html(snapshot.val().firstTrainTime);
        $("#frequency-display").html(snapshot.val().frequency);

    });