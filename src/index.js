import React from 'react';
import ReactDOM from 'react-dom';

import HomeScreen from './app/pages/HomeScreen/HomeScreen';
import CounterScreen from './app/pages/CounterScreen/CounterScreen';
import ContactScreen from './app/pages/ContactListScreen/ContactListScreen';
import NotFoundScreen from './app/pages/NotFoundScreen/NotFoundScreen';
import contacts from './app/data/contacts.json';
import WatchApp from './framework';
import ElevatorPitchScreen from './app/pages/ElevatorPitchScreen/ElevatorPitch';
import WellDoneScreen from './app/pages/WellDoneScreen/WellDone';
import YourPage from './app/pages/PlaySpace/YourPage';
import QuestionScreen from './app/pages/QuestionScreen/QuestionScreen';

const question = {
  question: '1 + 2 = ',
  top: '1',
  bottom: '2',
  left: '3',
  right: '4',
  answer: '3',
};

const pages = [
  { path: '/', Component: HomeScreen },
  { path: '/contacts', Component: ContactScreen, props: { contacts } },
  { path: '/counter', Component: CounterScreen },
  { path: '/notfound', Component: NotFoundScreen },
  { path: '/elevatorpitch', Component: ElevatorPitchScreen },
  { path: '/welldone', Component: WellDoneScreen },
  { path: '/yourpage', Component: YourPage },
  { path: '/question', Component: QuestionScreen, props: { ...question } },
];

ReactDOM.render(
  <WatchApp pages={ pages } />,
  document.getElementById('root'));
