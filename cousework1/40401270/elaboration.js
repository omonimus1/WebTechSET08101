function myFunction()
{
     var plain_text = document.getElementById('textarea1').value;

    if (plain_text.length == 0)
    {
        alert("String empty")
    }
    else
    {
        var encoded_string = '';
        // Go through each character
        for (var i = 0; i < plain_text.length; i++) 
        {
            // Get the character we'll be appending
            var single_character = plain_text[i];

            // If it's a letter...
            if (single_character .match(/[a-z]/i)) 
            {

                // Get its code
                var code = plain_text.charCodeAt(i);

                // Uppercase letters
                if ((code >= 65) && (code <= 90))
                    single_character  = String.fromCharCode(((code - 65 + 13) % 26) + 65);

                // Lowercase letters
                else if ((code >= 97) && (code <= 122))
                    single_character  = String.fromCharCode(((code - 97 + 13) % 26) + 97);
            }
            // Append
            encoded_string += single_character;
        }
    }
    alert(encoded_string);
    show_encoded_string(encoded_string);
}



function show_encoded_string(encoded_string)
{
    var paragraph = document.getElementById("paragraph1");
    var text = document.createTextNode(encoded_string);
    paragraph.appendChild(text);
}
