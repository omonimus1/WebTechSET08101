
function show_card()
{
    var app3 = new Vue({
        el: '.app-3',
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

