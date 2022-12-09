src="https://d3js.org/d3.v4.min.js";
src="https://cdn.jsdelivr.net/npm/billboard.js/dist/billboard.min.js";
src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";
src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js";
src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.1/Chart.min.js";

var chart = bb.generate({
    data: {
      columns: [
        ["Blue", 2],
        ["orange", 4],
        ["green", 3],
      ],
      type: "donut",
      onclick: function (d, i) {
        console.log("onclick", d, i);
      },
      onover: function (d, i) {
        console.log("onover", d, i);
      },
      onout: function (d, i) {
        console.log("onout", d, i);
      },
    },
    donut: {
      title: "70",
    },
    bindto: "#donut-chart",
  });
