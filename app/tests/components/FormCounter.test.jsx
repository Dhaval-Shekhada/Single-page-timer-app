var expect = require('expect');
import React from 'react';
import ReactDOM from 'react-dom';
//import jQuery from 'jquery';
var $  = require('jquery/dist/jquery.min');
var TestUtils = require('react/lib/ReactTestUtils');
//import TestUtils from 'react-addons-test-utils'

var FormCounter = require('FormCounter');

describe('countdownform', ()=> {

  it("should Exist", ()=>{

    expect(FormCounter).toExist();

  });

  it("should call onSetCountdown if valid seconds entered", ()=>{
    var spy = expect.createSpy();

    var formCountdown = TestUtils.renderIntoDocument(<FormCounter onSetCountdown ={spy}/>);
    var $el = $(ReactDOM.findDOMNode(formCountdown));
    formCountdown.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(109);
  });




});
