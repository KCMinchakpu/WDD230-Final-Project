
$('#myFruitoptions').dynamicFruitoptions({
    
      url:'https://brotherblazzard.github.io/canvas-content/fruit.json'
    
    });
    
    $.getJSON(settings.url, function(result) {
        $.each(result, function(i, value) {
            this_obj.append('<option>' + result.something  + ' - ' + result.somethingelse + '</option>');
            });

        }).fail(function() {
            console.log('%c ERROR: ' + 'Response data from ' + settings.url + 'is not a JSON object',
                'background: red');
        })