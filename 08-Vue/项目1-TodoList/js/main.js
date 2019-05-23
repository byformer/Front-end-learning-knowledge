new Vue({
  el: "#app",
  data: {
    current: "",
    list_no: [],
    list_yes: []
  },
  methods: {
    add: function() {
      if (this.current) {
        this.list_no.push(this.current);
        this.current = "";
      }
    },
    remove_no: function(index) {
      this.list_no.splice(index, 1);
    },
    remove_yes: function(index) {
      this.list_yes.splice(index, 1);
    },
    remove_all_yes: function() {
      this.list_yes.splice(0);
    },
    complate: function(index) {
      this.list_yes.push(this.list_no[index]);
      this.list_no.splice(index, 1);
    },
    change: function(index) {
      this.list_no.push(this.list_yes[index]);
      this.list_yes.splice(index, 1);
    }
  }
});
