import React from 'react';
import { connect } from 'react-redux';
import { getMoments } from '../actions/moments';

class FormSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }; 
  }

componentDidMount() {
    if (this.props.authToken) {
      getMoments(this.props.authToken);
    }
  }

handleTextFieldChange(event) {
    let location = event.target.value;
    let text = location // capitalize first letter
      .toLowerCase()
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substr(1))
      .join(' ');
    this.props.setLocation(text, 'location');
  }

render() {
    let momentsList = [];
    this.props.moments.forEach(({ id, location }) => momentsList.push({ id, location }));
    let uniqueSet = [...new Set(momentsList.map(moment => moment.location))];

// sort list alpha, map to render
    let sortedList = uniqueSet
      .sort((a, b) => {
        if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
      })
      .map((location, index) => <option key={index}>{location}</option>);

// store locations to state
    return (
      <div className="dropdown">
        <label htmlFor="location">Location</label>
        <input
          required
          className="form-input"
          type="text"
          name="location"
          placeholder="create or choose"
          value={this.props.location}
          onChange={event => this.handleTextFieldChange(event, 'location')}
          maxLength="20"
          autoComplete="off"
        />
        <select onChange={event => this.handleTextFieldChange(event, 'location')}>
          {sortedList}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moments: state.moments.moments,
  authToken: state.auth.authToken
});

export default connect(mapStateToProps)(FormSelect);