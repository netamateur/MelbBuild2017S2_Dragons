import React from 'react';
import Watch from '../../../framework/components/Watch/Watch';
import './HomePage.css';
import NotificationForm from '../NotificationForm/NotificationForm';
import HomeScreen from '../../pages/HomeScreen/HomeScreen';
import ContactScreen from '../../pages/ContactListScreen/ContactListScreen';
import CounterScreen from '../../pages/CounterScreen/CounterScreen';
import NotFoundScreen from '../../pages/NotFoundScreen/NotFoundScreen';
import contacts from '../../data/contacts.json';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationEvent: {
        text: 'Default notification text',
        displayNotification: false,
      },
    };
  }

  notificationHandler = (newEvent = this.state.notificationEvent) => {
    this.setState({ notificationEvent: newEvent });
  };

  render() {
    return (
      <div id='home-container'>
        <div id='left'>
          <h1>LevelUp Watch Edition</h1>
          <p>This is LevelUp Watch Edition sample app.</p>
          <NotificationForm
            defaultText={ this.state.notificationEvent.text }
            handleEvent={ this.notificationHandler }
          />
        </div>
        <div id='right'>
          <Watch notificationEvent={ this.state.notificationEvent }>
            <HomeScreen path='/' />
            <ContactScreen path='/contacts' contacts={ contacts } />
            <CounterScreen path='/counter' />
            <NotFoundScreen path='/notfound' />
          </Watch>
        </div>
      </div>
    );
  }
}

export default HomePage;
