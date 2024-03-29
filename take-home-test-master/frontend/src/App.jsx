import React from 'react';
import RevenueGraph from './Components/RevenueGraph';
import TabWrapper, { Tab } from './Components/TabWrapper';
import './App.css';

const App = () => (
  <TabWrapper>
    <Tab title="Sales Rep">
      <RevenueGraph userId={203} />
    </Tab>
    <Tab title="Manager">
      <RevenueGraph userId={32} />
    </Tab>
    <Tab title="Director">
      <RevenueGraph userId={2} />
    </Tab>
  </TabWrapper>
);

export default App;
