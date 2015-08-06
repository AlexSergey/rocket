(function($) {
    $(function(){
        Handlebars.registerHelper('ifCond', function(v1, v2, options) {
            if(v1 === v2) {
                return options.fn(this);
            }
            return options.inverse(this);
        });

        Handlebars.registerHelper('formatDate', function(date) {
            var momentObj = moment(new Date(date));
            momentObj.locale('en', {
                monthsShort : [
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ]
            });
            return momentObj.format('MMMM Do YYYY, h:mm:ss');
        });

        $.get(
            "./log.text",
            function(data) {
                var newData = JSON.parse('[' + data.split('\n').join(',').substring(0, data.length - 1) + ']');
                var source   = $("#template").html();
                var template = Handlebars.compile(source);
                $('#wrapper').append(template({data: newData}));
            }
        )
    });
})(jQuery);