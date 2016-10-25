Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})

function loadIssue() {
  var issue = {
    state: "closed",
    number: 5,
    created_at: "2016-03-31 16:23:13 UTC",
    body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
  }
  ///Loading just one issue
   var result = template(issue);
   document.getElementsByTagName("main")[0].innerHTML += result;
}


function loadIssues() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);

/// loading all issues straight into the template
   var result = template(issues);
   document.getElementsByTagName("main")[0].innerHTML += result;

///slowly looping through issues
 //  for(var i=0;i<issues.length;i++) {
 //   var result = template(issues[i]);
 //   document.getElementsByTagName("main")[0].innerHTML += result;
 // }


}
