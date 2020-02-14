function erase()
{
	document.getElementById("full_name").value = "";
	document.getElementById("message").value = "";
	document.getElementById("email").value = "";
	document.getElementById("object").value = "";
}

function send()
{
Email.send({
    Host: "http"
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}