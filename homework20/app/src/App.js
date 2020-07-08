import React from 'react';
import TabBox from './components/tab-box/TabBox.js'
import './App.css';
import RenderFirstTask from './components/render-tasks/FirstTaskRender.js'
import RenderSecondTask from './components/render-tasks/SecondTaskRender.js'
import RenderThirdTask from './components/render-tasks/ThirdTaskRender.js'
import RenderFourthTask from './components/render-tasks/FourthTaskRender.js'


function App() {
  
  return (
    <div className="App-outside">
      <TabBox
        tabButtonArray={["first task", "second task", "third task", "fourth task"]}
        buttonPrefix="TabButton"
        contentArray={[RenderFirstTask(), RenderSecondTask(), RenderThirdTask(), RenderFourthTask()]}
      />
    </div>
  );
}

export default App;
