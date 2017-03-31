var expect = require('expect');
import React from 'react';
import ReactDOM from 'react-dom';
var $  = require('jquery/dist/jquery.min');
var TestUtils = require('react/lib/ReactTestUtils');
//import TestUtils from 'react-addons-test-utils'
var Clock = require('Clock');

describe('Clock', () => {
    it('Should exist', () => {

        expect(Clock).toExist();
    });

    describe('render',()=>{
      it('Should render clock output', ()=>{
        var clock = TestUtils.renderIntoDocument(<Clock totalSeconds ={62}/>);
        var $el = $(ReactDOM.findDOMNode(clock));
        var actualText = $el.find('.clock-text').text();

        expect(actualText).toBe('01:02');

      });
    });

    describe('formatSeconds', function() {

        it("should format seconds", () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 615;
            var expected = "10:15";
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);

        });

        it("should format seconds when sec and minutes are less than 10", () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 61;
            var expected = "01:01";
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);

        });
    });

});
