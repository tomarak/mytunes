// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
     this.model.enqueue();
     console.log("click");
      // this.trigger('enqueue', this); //need to come back to and update event calls
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
