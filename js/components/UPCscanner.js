
var React  = require('react');
var ReactDOM  = require('react-dom');
var quagga = require('quagga');

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
  render() {
    return (
      <div>
        <input onChange={this._processFile} ref="file" type="file" style={{display: 'none'}}/>
        <button onClick={this._openFile}>SCAN!</button>
      </div>
    )
  }
});

function gotUpcCode(upc) {
  alert(upc);
}
ReactDOM.render(<BarcodeScanner onChange={gotUpcCode}/>, document.querySelector('#app'));

export