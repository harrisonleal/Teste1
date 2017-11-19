
var app = {    
    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
                var self = this;
                this.store.findByName($('.search-key').val(), function(employees) {
                $('.employee-list').html(self.employeeLiTpl(employees));
            });
        });
    },
    
     renderHomeView: function() {
        var html =
            "<div class='header'><h1>Home</h1></div>" +
            "<div class='search-view'>" +
            "<input class='search-key'/>" +
            "<ul class='employee-list'></ul>" +
            "</div>"
        //$('body').html(html);
        $('body').html(this.homeTpl());
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },

    //initialize: function() {
    //    this.store = new MemoryStore();
    //    $('.search-key').on('keyup', $.proxy(this.findByName, this));
    //}
    initialize: function() {
        var self = this;
        this.store = new MemoryStore(function() {
            self.renderHomeView();
            });
        this.homeTpl = Handlebars.compile($("#home-tpl").html());
        this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
    }   
};
app.initialize();


