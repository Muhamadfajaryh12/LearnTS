import React from 'react';
import './App.css';
import { LearnProps } from './components/LearnProps';
import { BasicProps } from './components/BasicProps';
import { BasicPropsList } from './components/BasicPropsList';
import { AdvancedProps } from './components/AdvancedProps';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { EventProps } from './components/EventProps';
import { InputProps } from './components/InputProps';
import { StyleProps } from './components/StyleProps';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
function App() {
  const personName ={
    first:'fajar',
    last:'herjanto'
  }
  const personNameList =[
    {
      first:"fajar",
      last:"herjanto"
    },
    {
      first:"Muhamad",
      last:"Yudhistira"
    }
  ]
  return (
    <div className="App">
      <LearnProps name={"test"} isLoggedIn={true}/>
      <BasicProps name={personName}/>
      <BasicPropsList names={personNameList}/>
      <AdvancedProps status='loading'/>
      <Oscar>
        <Heading>Ini Oscar</Heading>
      </Oscar>
      <EventProps handleClick={(event,id)=>{
        console.log('button sudah ditekan',event,id)
      }}/>
      <InputProps value='' handleChange={(event) =>console.log(event)}/>
      <StyleProps styles={{padding:'10px', background:'gray'}}/>
      <LoggedIn/>
      <User/>
      <Counter/>
    </div>
  );
}

export default App;
