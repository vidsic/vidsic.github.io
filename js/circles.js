$("#team1").css("background-image", "url(img/geige.jpg)");
$("#team2").css("background-image", "url(img/e-gitarre.jpg)");
$("#team3").css("background-image", "url(img/klavier.jpg)");
$("#team4").css("background-image", "url(img/metal.jpg)");
$("#team5").css("background-image", "url(img/saz.jpg)");
$("#team6").css("background-image", "url(img/beethoven.jpg)");
$("#team7").css("background-image", "url(img/eminem.jpg)");
$("#team8").css("background-image", "url(img/klavier2.jpg)");
$("#team9").css("background-image", "url(img/zayn.jpg)");

jsPlumb.ready(function() {
	jsPlumb.draggable("team1", {containment:true});
	jsPlumb.draggable("team2", {containment:true});
	jsPlumb.draggable("team3", {containment:true});
	jsPlumb.draggable("team4", {containment:true});
	jsPlumb.draggable("team5", {containment:true});
	jsPlumb.draggable("team6", {containment:true});
	jsPlumb.draggable("team7", {containment:true});
	jsPlumb.draggable("team8", {containment:true});
	jsPlumb.draggable("team9", {containment:true});
	
	var common = {
		connector: "Straight",
		paintStyle:{ stroke:"white", strokeWidth:2 },
		endpoint:"Blank",
		anchor: "Center"
	};
	
	jsPlumb.connect({
		source:"team1",
		target:"team2"
	}, common);
	jsPlumb.connect({
		source:"team1",
		target:"team3"
	}, common);
	jsPlumb.connect({
		source:"team1",
		target:"team4"
	}, common);
	jsPlumb.connect({
		source:"team1",
		target:"team5"
	}, common);
	jsPlumb.connect({
		source:"team1",
		target:"team6"
	}, common);
	jsPlumb.connect({
		source:"team1",
		target:"team7"
	}, common);
	jsPlumb.connect({
		source:"team1",
		target:"team8"
	}, common);
	jsPlumb.connect({
		source:"team1",
		target:"team9"
	}, common);
	
	jsPlumb.connect({
		source:"team2",
		target:"team3"
	}, common);
	jsPlumb.connect({
		source:"team2",
		target:"team4"
	}, common);
	jsPlumb.connect({
		source:"team2",
		target:"team5"
	}, common);
	jsPlumb.connect({
		source:"team2",
		target:"team6"
	}, common);
	jsPlumb.connect({
		source:"team2",
		target:"team7"
	}, common);
	jsPlumb.connect({
		source:"team2",
		target:"team8"
	}, common);
	jsPlumb.connect({
		source:"team2",
		target:"team9"
	}, common);
	
	
	jsPlumb.connect({
		source:"team3",
		target:"team4"
	}, common);
	jsPlumb.connect({
		source:"team3",
		target:"team5"
	}, common);
	jsPlumb.connect({
		source:"team3",
		target:"team6"
	}, common);
	jsPlumb.connect({
		source:"team3",
		target:"team7"
	}, common);
	jsPlumb.connect({
		source:"team3",
		target:"team8"
	}, common);
	jsPlumb.connect({
		source:"team3",
		target:"team9"
	}, common);
	
	jsPlumb.connect({
		source:"team4",
		target:"team5"
	}, common);
	jsPlumb.connect({
		source:"team4",
		target:"team6"
	}, common);
	jsPlumb.connect({
		source:"team4",
		target:"team7"
	}, common);
	jsPlumb.connect({
		source:"team4",
		target:"team8"
	}, common);
	jsPlumb.connect({
		source:"team4",
		target:"team9"
	}, common);
	
	jsPlumb.connect({
		source:"team5",
		target:"team6"
	}, common);
	jsPlumb.connect({
		source:"team5",
		target:"team7"
	}, common);
	jsPlumb.connect({
		source:"team5",
		target:"team8"
	}, common);
	jsPlumb.connect({
		source:"team5",
		target:"team9"
	}, common);
	
	jsPlumb.connect({
		source:"team6",
		target:"team7"
	}, common);
	jsPlumb.connect({
		source:"team6",
		target:"team8"
	}, common);
	jsPlumb.connect({
		source:"team6",
		target:"team9"
	}, common);
	
	jsPlumb.connect({
		source:"team7",
		target:"team8"
	}, common);
	jsPlumb.connect({
		source:"team7",
		target:"team9"
	}, common);
	
	jsPlumb.connect({
		source:"team8",
		target:"team9"
	}, common);
	
});

$(".circle").on("touchend click", function(){
	$("#"+this.id+"").toggleClass("willGrow");
	jsPlumb.setDraggable(this.id, false);
	$("#circle-wrapper").addClass("willChangeColor");
	$(".circle").addClass("willChangeColor");
	$("#main").addClass("willChangeColor");
	setTimeout(function(){window.location.href='pages/teams.html'},1000);
});

$(".circle").on("touchmove", function() {
	document.getElementById("main").style.textTransform = "none";
	document.getElementById("maintext").innerHTML = setMainText(this.id);
});

function setMainText(team) {
	switch(team) {
		case "team1": return "<b>Geige</b> - NoNames";
		case "team2": return "<b>E-Gitarre</b> - Zockis";
		case "team3": return "<b>Klavier</b> - Titan";
		case "team4": return "<b>Metal</b> - Sleepwalkers";
		case "team5": return "<b>Black Yodas</b> - Gitarre/Violine/Saz";
		case "team6": return "<b>Ludwig van Beethoven</b> - Sucuk";
		case "team7": return "<b>Eminem</b> - Urus";
		case "team8": return "<b>Klavier</b> - Bombastic";
		case "team9": return "<b>Zayn Malik</b> - Anonym";
		default: return "Erkunde Teams! Los geht's!";
	}
};