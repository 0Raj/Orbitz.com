let data = [
    {
      Time: "8:00pm-10:10pm",
      from: "Delhi(DEL)-Mumbai(BOM)",
      flight: "Air India",
      time: "2h 10min",
      hault: "(Nonstop)",
      stop: "-",
      price: 123.38,
      Earn: "Earn $1.23 Orbucks",
    },
    {
      Time: "9:00am-11:15am",
      from: "Delhi(DEL)-Mumbai(BOM)",
      flight: "Air India",
      time: "2h 15min",
      hault: "(Nonstop)",
      stop: "-",
      price: 150.38,
      Earn: "Earn $1.23 Orbucks",
    },
    {
      Time: "7:00pm-9:15",
      from: "Delhi(DEL)-Mumbai(BOM)",
      flight: "Air India",
      time: "2h 15min",
      hault: "(Nonstop)",
      stop: "-",
      price: 123.38,
      Earn: "Earn $1.23 Orbucks",
    },
    {
      Time: "2:45pm-6:00pm",
      from: "Delhi(DEL)-Mumbai(BOM)",
      flight: "Air India",
      time: "3h 15min",
      hault: "(1 stop)",
      stop: "35m in indore",
      price: 163.38,
      Earn: "Earn $1.23 Orbucks",
    },
    {
      Time: "5:50pm-9:35pm",
      from: "Delhi(DEL)-Mumbai(BOM)",
      flight: "Air India",
      time: "3h 45min",
      hault: "(1 stop)",
      stop: "45m in Aurangabad",
      price: 160.38,
      Earn: "Earn $1.23 Orbucks",
    },
    {
      Time: "4:45pm-9:25pm",
      from: "Delhi(DEL)-Mumbai(BOM)",
      flight: "Air India",
      time: "3h 40min",
      hault: "(1 stop)",
      stop: "1h 45m in Ahmedabad",
      price: 173.38,
      Earn: "Earn $1.23 Orbucks",
    },
    {
      Time: "4:45pm-9:25pm",
      from: "Delhi(DEL)-Mumbai(BOM)",
      flight: "Air India",
      time: "3h 40min",
      hault: "(2 stop)",
      stop: "1h in Ahmedabad,45m in jaipur",
      price: 193.38,
      Earn: "Earn $1.23 Orbucks",
    },
    {
      Time: "4:45pm-9:25pm",
      from: "Delhi(DEL)-Mumbai(BOM)",
      flight: "Air India",
      time: "3h 40min",
      hault: "(2 stop)",
      stop: "1h in surat,45m in jaipur",
      price: 183.38,
      Earn: "Earn $1.23 Orbucks",
    },
  ];

  function filter() {
    var div = document.getElementById("second");
    div.innerHTML = "";

    var selected = document.querySelector("#check").value;
    var filteredList = data.filter(function (elem) {
      return elem.hault == selected;
    });
    displaydata(filteredList);
  }

  function filter1() {
    var div = document.getElementById("second");
    div.innerHTML = null;

    var selected = document.querySelector("#check1").value;
    var filteredList = data.filter(function (elem) {
      return elem.hault == selected;
    });
    displaydata(filteredList);
  }

  
  function sortPrice() {
    var div = document.getElementById("second");
    div.innerHTML = null;
    var selected = document.querySelector("#sortPrice").value;
    if (selected == "low") {
      data.sort(function (a, b) {
        return a.price - b.price;
      });
    }
    if (selected == "high") {
      data.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    displaydata(data);
  }

  function filter2() {
    var div = document.getElementById("second");
    div.innerHTML = null;

    var selected = document.querySelector("#check2").value;
    var filteredList = data.filter(function (elem) {
      return elem.hault == selected;
    });
    displaydata(filteredList);
  }

  displaydata(data);

  function displaydata(data) {
    data.map(function (elem) {
      var div = document.createElement("div");
      div.addEventListener("click",function(){
        window.location.href="rohan.html"
      })

      var div1 = document.createElement("div");

      var div2 = document.createElement("div");

      var div3 = document.createElement("div");

      var time = document.createElement("h3");
      time.textContent = elem.Time;

      var from = document.createElement("p");
      from.textContent = elem.from;

      var flight = document.createElement("p");
      flight.textContent = elem.flight;

      var duration = document.createElement("p");
      duration.textContent = elem.time;

      var hault = document.createElement("p");
      hault.textContent = elem.hault;

      var stop = document.createElement("p");
      stop.textContent = elem.stop;

      var price = document.createElement("h2");
      price.textContent = "$" + elem.price;

      var earn = document.createElement("p");
      earn.textContent = elem.Earn;
      earn.style.color="rgb(141,0,153)";

      div1.append(time, from, flight);
      div2.append(duration, hault, stop);
      div3.append(price, earn);
      div.append(div1, div2, div3);

      document.querySelector("#second").append(div);
    });
  }
  
  document.querySelector("#mainSIn").addEventListener("click", function(){
    window.location.href = "login.html";
    });
    document.querySelector("#leftDiv>img").addEventListener("click", function(){
      window.location.href = "landingPage.html";
      });