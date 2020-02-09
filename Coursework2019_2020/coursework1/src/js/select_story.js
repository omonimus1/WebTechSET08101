function show_card()
{
    var s = document.getElementsByName('parameters')[0];
    var text = s.options[s.selectedIndex].text;
    var class_access_token =".";
    var class_name = class_access_token.concat(text);
    var app3 = new Vue({
        el: class_name,
        data: {
            seen: false
        }
  })

}

function show_selected() {
    var s = document.getElementsByName('parameters')[0];
var text = s.options[s.selectedIndex].text;

    alert(text);
}