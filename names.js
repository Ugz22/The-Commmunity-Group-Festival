<!DOCTYPE html>
<html>
	<body>
	<script>
		const person = {
		firstName: "V",
		lastName: "9",
		id: 4199,
		fullName: function() {
		return this.firstName + " " + this.lastName;
  }
};

		document.getElementById("names"); = person.fullName();
	</script>


<script>
		const person = {
		firstName: "Dj",
		lastName: "Mike",
		id: 3232,
		fullName: function() {
		return this.firstName + " " + this.lastName;
  }
};

		document.getElementById("3232").html = person.fullName();
	</script>


<script>
		const person = {
		firstName: "Wrong",
		lastName: "Direction",
		id: 4321,
		fullName: function() {
		return this.firstName + " " + this.lastName;
  }
};

		document.getElementById("4321").html = person.fullName();
	</script>


<script>
		const person = {
		firstName: "Max & Ruby",
		lastName: "Rooptan",
		id: 9639,
		fullName: function() {
		return this.firstName + " " + this.lastName;
  }
};

		document.getElementById("9639").html = person.fullName();
	</script>
	</body>
</html>


function draw() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let img = new Image();
  img.addEventListener("load", ()=>{
    ctx.drawImage(img,0,0);
    ctx.font = '50px serif';
    ctx.fillText('Hello world', 50, 90);
  });
  img.src = "Max & Ruby.jpg";
}











