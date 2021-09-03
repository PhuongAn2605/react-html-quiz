import './App.css';
import { Spin } from 'antd';
import "antd/dist/antd.css";

import { LocalizeProvider } from 'react-localize-redux';
import { withLocalize } from 'react-localize-redux';

import { ChromePicker, SketchPicker } from 'react-color';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Introduction from './components/introduction/Introduction';
import Header from './components/header/Header';
// import Question from './components/question/Question';
import { lazy, Suspense, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchQuestions } from './redux/question/question.actions';
import ReviewSection from './components/review-section/ReviewSection';
import { clearUserAnswers } from './redux/user-answers/user-answers.actions';
import AttemptSection from './components/attepmt-section/AttemptSection';
import React from 'react';
import initializeLanguage from './translations/initializeLanguage';

const Question = lazy(() => import('./components/question/Question'));

class App extends React.Component {

  state = {
    isDisabled: true,
    color: {
      r: '255',
      g: '255',
      b: '255',
      a: '1'
    }
  };

  handleClick = () => {
    this.setState({ isDisabled: !this.state.isDisabled })
  }

  handleClose = () => {
    this.setState({ isDisabled: true })
  }

  handleOnChange = (color) => {
    this.setState({
      color: color.rgb
    });

    //  if(this.)
  }

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchQuestions());
  //   // dispatch(clearUserAnswers());
  //   console.log('I am fired')
  // },[]);
  render() {

    const color = {
      width: '14px',
      height: '14px',
      borderRadius: '2px',
      // background: `${this.state.color.hex}`
      background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
    }

    const swatch = {
      padding: '5px',
      background: '#fff',
      borderRadius: '1px',
      boxShadow: '0 0 0 1px rgba(0,0,0,.5)',
      display: 'inline-block',
      cursor: !this.state.isDisabled ? 'not-allowed' : 'pointer'
    }

    const popover = {
      position: 'absolute',
      zIndex: '2'
    }

    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    }

    return (
      <div className="App" style={{ background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})` || 'unset' }}>
        <div className='color-picker' style={{ marginLeft: '30px' }}>
          <p>Background color</p>
          <div style={swatch} onClick={this.handleClick}>
            <div style={color} className='color-picker-content'></div>
          </div>
          {
            (!this.state.isDisabled ? <div style={popover}>
              <div style={cover} onClick={this.handleClose} />
              <ChromePicker color={this.state.color} onChange={this.handleOnChange} disableAlpha={true} width={120} height={120} />
            </div> : null)
          }
        </div>
        <div className='main-body'>
          <LocalizeProvider initialize={initializeLanguage}>
            <Header />
            <Suspense fallback={<Spin />} >
              <Switch>
                <Route exact path='/' component={Introduction} />
                <Route exact path='/attempts' component={AttemptSection} />
                <Route exact path='/review' component={ReviewSection} />

              </Switch>
            </Suspense>
          </LocalizeProvider>
        </div>
      </div>
    );
  }
}

export default withLocalize(App);
