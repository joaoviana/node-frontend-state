var app = {
  local_state: 'local state',

  read_api: function() {
    axios({
      method:'get',
      url:'http://localhost:3001/get'
    }).then((response) => {
      app.render_display(response.data);
    }).catch((err) => {
      if(err) {
        console.log(err);
      }
    });
  },

  update_api: function() {
    var text_input = document.getElementById('text_input');
    var new_state = text_input.value;
    var dest_url = 'http://localhost:3001/post/' + new_state;
    axios({
      method: 'post',
      url: dest_url
    }).then((response) => {
      app.render_display(response.data);
    }).catch((err) => {
      if(err) {
        console.log(err);
      }
    });
  },

  read_local: function() {
    app.render_display(app.local_state);
  },

  update_local: function() {
    var text_input = document.getElementById('text_input');
    var new_state = text_input.value;
    app.local_state = new_state;
  },

  initialize: function() {
    console.log('Hi');
    this.render_input();
    this.render_display();
    this.read_api();
  },

  render_display: function(state_object) {
    var display_component  = document.getElementById('display_component');

    if(display_component ==  null) {

      var container = document.getElementById('container');
      var display_component = document.createElement('DIV');
      display_component.id = 'display_component';

      var data_div = document.createElement('DIV');
      data_div.id = 'data_div';
      display_component.appendChild(data_div);

      var read_global = document.createElement('BUTTON');
      read_global.id = 'read_global_button';
      read_global.onclick = this.read_api;
      read_global.innerHTML = 'read global state';
      display_component.appendChild(read_global);

      var read_local = document.createElement('BUTTON');
      read_local.id = 'submit_global_button';
      read_local.onclick = this.read_local;
      read_local.innerHTML = 'read local state';
      display_component.appendChild(read_local);

      container.appendChild(display_component);
    };

    var new_text = JSON.stringify(state_object);
    var data_div =  document.getElementById('data_div');
    data_div.innerHTML = new_text;
  },

  render_input: function() {
    var input_component = document.getElementById('input_component');

  if (input_component == null) {

    var container = document.getElementById('container');
    var input_component = document.createElement('DIV');
    input_component.id = 'input_component';

    var text_input = document.createElement("INPUT");
    text_input.id = 'text_input';
    text_input.value = 'phht';
    input_component.appendChild(text_input);

    var submit_global = document.createElement('BUTTON');
    submit_global.id = 'submit_global';
    submit_global.onclick = this.update_api;
    submit_global.innerHTML = 'update global state';
    input_component.appendChild(submit_global);

    var submit_local = document.createElement('BUTTON');
    submit_local.id = 'submit_local';
    submit_local.onclick = this.update_local;
    submit_local.innerHTML = 'update local state';
    input_component.appendChild(submit_local);

    container.appendChild(input_component);
    }
  }
}
