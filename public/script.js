"use strict";

function foo() {
    "use strict";
};

var Field = React.createClass({
  displayName: 'Field',

  type: 'text',

  getInitialState: function getInitialState() {
    return {
      inputValue: ''
    };
  },

  updateInputValue: function updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'strong',
        null,
        this.props.label
      ),
      React.createElement(
        'div',
        null,
        React.createElement('input', {
          type: this.props.type,
          value: this.state.inputValue,
          onChange: this.updateInputValue,
          id: this.props.id })
      ),
      React.createElement('br', null)
    );
  }
});

var Submit = React.createClass({
  displayName: 'Submit',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        React.createElement('input', { type: 'submit', value: 'Submit' })
      ),
      React.createElement('br', null)
    );
  }
});

/*my safe*/

var Form = React.createClass({
  displayName: 'Form',

  postData: function postData() {
    $.ajax({
      url: "index.html",
      type: "POST",
      data: {
        "email": "email@email.com",
        "first_name": "firstName",
        "last_name": "lastName",
        "birth_date": "birthDate"
      },

      success: function success(data) {
        alert(data);
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        alert("It did not work");
      }
    });
  },

  // Update Props for All Fields
  //firstName
  updateFirst: function updateFirst(e) {
    console.log('test test test');
    this.props.firstName = e.target.value;
  },
  //lastName
  updateLast: function updateLast(e) {
    this.setState({
      lastName: e.target.value
    });
  },
  //eMail
  updateEmail: function updateEmail(e) {
    this.setState({
      eMail: e.target.value
    });
  },
  //birthDate
  updateDate: function updateDate(e) {
    this.setState({
      birthDate: e.target.value
    });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        { onSubmit: this.postData },
        React.createElement(Field, { label: 'First Name', id: 'firstName',
          onChange: this.updateFirst }),
        this.props.firstName,
        React.createElement(Field, { label: 'Last Name', id: 'lastName' }),
        this.props.lastName,
        React.createElement(Field, { label: 'Email', type: 'email', id: 'eMail' }),
        this.props.eMail,
        React.createElement(Field, { label: 'Birth Date', type: 'date', id: 'birthDate' }),
        this.props.birthDate,
        React.createElement(Submit, null)
      )
    );
  }
});


