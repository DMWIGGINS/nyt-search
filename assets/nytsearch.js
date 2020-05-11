var APIKey = "D4Aib4MqQ1FoQQBHgGiFkKnG0rvEZ8vo";
var keyword;
var beginDate;
var endDate;
var page = "0";
// var author = "";



// "&page=" + page +

$(document).ready(function() {


    $("button").click(function() {

        console.log("button clicked!")

        keyword = $("#keyword").val().trim();
        beginDate = $("#beginDate").val().trim();
        endDate = $("#endDate").val().trim();
        author = $("#authorName").val().trim();
        console.log(keyword);
        console.log(beginDate);
        console.log(endDate);
        console.log(author);

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyword + "&begin_date=" + beginDate + "&end_date=" + endDate + "&api-key=" + APIKey;


        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            console.log(response.response.docs);
            console.log(response);

            for (var i = 0; i < 10; i++) {
                var resultsDisplay = $("<tbody>");

                var tableColor = $("<tr>").addClass("table-info");

                var resultNumber = $("<td>").text(i + 1);

                $(tableColor).append(resultNumber);
                var resultTitle = $("<td>").text(response.response.docs[i].headline.main);
                $(tableColor).append(resultTitle);
                var urlLink = $("<td>").text(response.response.docs[i].web_url).attr("href", response.response.docs[i].web_url);


                $(tableColor).append(urlLink);
                var datePublished = $("<td>").text(response.response.docs[i].pub_date);
                $(tableColor).append(datePublished);
                $(resultsDisplay).append(tableColor);
                $(".table").append(resultsDisplay);


                console.log(i + 1);
                console.log(response.response.docs[i].headline.main);
                console.log(response.response.docs[i].web_url);
                console.log(response.response.docs[i].pub_date);


            }
        })



    });
});