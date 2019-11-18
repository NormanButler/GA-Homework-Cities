//  Use $.ready() to delay code from executing until all DOM assets have been loaded

$(document).ready(function(){

    //  Use on.click() function to check when user clicks 'submit' button
    //  Prevent form submission using event.preventDefault() function

    $('#submit-btn').click(function(event){
        event.preventDefault();
        
        //  Store user input into variable called city
        //  Get the input and convert it into a string using .val() so that it can be   
        //  compared in if / else if statements
        //  Change all inputs #city-type .toLowerCase() so as to be certain that regardless of how 
        //  user inputs the text the string is of same form when comparing
        //  For Bonus feature use .trim() to remove extra spaces or lines the user or browser
        //  may add before or after any input

        var city = $.trim($('#city-type').val().toLowerCase());

            //  Use if / else if / else to compare city VAR with the predefined city name lower 
            //  cased user input string


            //  If user inputs New York or New York City or NYC make background page nyc.jpg
            //  Compare city VAR using == equal and || OR to expected lower case string values of city name
            //  and execute if matching string value is found
            if (city == 'new york' || city == 'new york city' || city == 'nyc') {

                //  Use $.attr() to apply nyc background image with CSS class name
                $('body').attr('class', 'nyc');

            //  If user inputs San Francisco or SF or Bay Area make background page sf.jpg
            //  Compare city VAR using == equal and || OR to expected lower case string values of city name
            //  and execute if matching string value is found
            } else if (city == 'san francisco' || city == 'sf' || city == 'bay area') {
                
                //  Use $.attr() to apply sf background image with CSS class name
                $('body').attr('class', 'sf');

            //  If user inputs Los Angeles or LA or LAX make background page la.jpg
            //  Compare city VAR using == equal and || OR to expected lower case string values of city name
            //  and execute if matching string value is found
            } else if (city == 'los angeles' || city == 'la' || city == 'lax') {

                //  Use $.attr() to apply la background image with CSS class name
                $('body').attr('class', 'la');

            //  If user inputs Austin or ATX make background page austin.jpg
            //  Compare city VAR using == equal and || OR to expected lower case string values of city name
            //  and execute if matching string value is found
            } else if (city == 'austin' || city == 'atx') {

                //  Use $.attr() to apply austin background image with CSS class name
                $('body').attr('class', 'austin');

            //  If user inputs Sydney or SYD make background page sydney.jpg
            //  Compare city VAR using == equal and || OR to expected lower case string values of city name
            //  and execute if matching string value is found
            } else if (city == 'sydney' || city == 'syd') {

                //  Use $.attr() to apply sydney background image with CSS class name
                $('body').attr('class', 'sydney');  
            }

            //  Bonus feature: Reset the user input field #city-type after input with an empty string
            $('#city-type').val('');
        
    });

});