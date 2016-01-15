import React from 'react';
import request from 'superagent';
import {Link} from 'react-router';

import Formsy from 'formsy-react';
import FormInput from './FormInput';
import SearchName from './SearchName';
import SearchUPC from './SearchUPC';


var ReactDOM  = require('react-dom');
var quagga = require('quagga');

import Parse from 'parse'
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

var Search = React.createClass({
    submitName: function (model) {
        event.preventDefault();
        console.log(model.searchName);
        this.props.history.pushState(null, '/search-result/' + model.searchName);
    },
    submitUPC: function (model) {
        event.preventDefault();
        console.log(model.searchUPC);
        this.props.history.pushState(null, '/search-result/product/' + model.searchUPC);
    },
    
var BarcodeScanner = React.createClass({
  _openFile() {
    this.refs.file.click();
  },
  _processFile(e) {
    var src = URL.createObjectURL(e.target.files[0]);
    quagga.decodeSingle({
      src: src,
      decoder: {
        readers: ['upc_reader']
      },
      numOfWorkers: 4
    }, (result) => {
      var code = result && result.codeResult && result.codeResult.code;
      if (code && typeof this.props.onChange === 'function') {
        this.props.onChange(code);
      }
    });
  },

function gotUpcCode(upc) {
  alert(upc);
}
ReactDOM.render(<BarcodeScanner onChange={gotUpcCode}/>, document.querySelector('#app'));

export default Search;
    render: function () {
        return (
            <div className="main">
                <h1>Search</h1>
                <SearchName submitName={this.submitName}/>
                <SearchUPC submitUPC={this.submitUPC}/>

        <input onChange={this._processFile} ref="file" type="file" style={{display: 'none'}}/>
        <button onClick={this._openFile}>SCAN!</button>

            </div>
        )
    }
});

