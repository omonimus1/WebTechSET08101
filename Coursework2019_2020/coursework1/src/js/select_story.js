function get_category()
{
    var s = document.getElementsByName('parameters')[0];
    var text = s.options[s.selectedIndex].text;
    if(text == 'All')
    {
        reload_page();
        return;
    }
    else
    {
        var class_access_token =".";
        var class_name = class_access_token.concat(text);
        filter_card(class_name);
    }

}

function filter_card(class_name)
{
    var story_categories = ['.Fantasy' , '.Childhood' , '.Horror'];
   for(var i = 0; i < story_categories.length; i++)
   {
       if(story_categories[i] == class_name)
       {
           continue; 
       }
       else
       {
           hide_card(story_categories[i]);
       }
   }
}

function reload_page()
{
    location.reload(false);
}

function hide_card(hide_id)
{
    var app4 = new Vue({
        el: hide_id,
        data: {
            seen: false
        }
    })
}