var React = require('react');
var Moment = require('moment');

var Component = React.createClass({
  getInitialState: function () {

      return this.getThisMoment();
  },
  componentDidMount: function () {

      this.interval = setInterval(this.refreshTime, 1000);
  },
  componentWillUnmount: function () {

      clearInterval(this.interval);
  },
  refreshTime: function () {

      this.setState(this.getThisMoment());
  },
  getThisMoment: function () {

      var thisMoment = Moment();

      return {
          second: thisMoment.format('ss'),
          minute: thisMoment.format('mm'),
          hour: thisMoment.format('HH'),
          day: thisMoment.format('DD'),
          month: thisMoment.format('MM'),
          year: thisMoment.format('YYYY')
      };
  },
  render: function () {

    return (
      <div className="main-body">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div id="mapid" />
            </div>
            <div id="query" className="col-md-4">
              <div className="well pre-scrollable">
                <h3>Query Form</h3>
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="list-unstyled middle">
                      <li>
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputPlatform" className="col-xs-4">Platform</label>
                            <div className="col-xs-8">
                              <input type="text" className="form-control" id="inputPlatform" placeholder="ie. ERS-1,RADARSAT-1,ENVISAT..." />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li>
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputAbOrbit" className="col-xs-4">Absolute Orbit: </label>
                            <div className="col-xs-8">
                              <input type="number" className="form-control" id="inputAbOrbit" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li>
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputRelOrbit" className="col-xs-4">Relative Orbit: </label>
                            <div className="col-xs-8">
                              <input type="number" className="form-control" id="inputRelOrbit" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li>
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputFrame" className="col-xs-4">Frame: </label>
                            <div className="col-xs-8">
                              <input type="number" className="form-control" id="inputFrame" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li>
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputStartDate" className="col-xs-4">Start Date: </label>
                            <div className="input-group date col-xs-8" id="inputStartDate">
                              <input type="text" className="form-control" />
                              <span className="input-group-addon">
                                <span className="glyphicon glyphicon-calendar" />
                              </span>
                            </div>
                          </div>
                        </form>
                      </li>
                      <li>
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputEndDate" className="col-xs-4">End Date: </label>
                            <div className="input-group date col-xs-8" id="inputEndDate">
                              <input type="text" className="form-control" />
                              <span className="input-group-addon">
                                <span className="glyphicon glyphicon-calendar" />
                              </span>
                            </div>
                          </div>
                        </form>
                      </li>
                      <li>
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputBeamMode" className="col-xs-4">Beam Mode: </label>
                            <div className="col-xs-8">
                              <input type="text" className="form-control" id="inputBeamMode" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="swath">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputSwath" className="col-xs-4">Swath: </label>
                            <div className="col-xs-8">
                              <input type="text" className="form-control" id="inputSwath" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="flight-direction">
                        <form className="form-horizontal" role="form">
                          <div className="form-group">
                            <label htmlFor="radio" className="col-xs-5">Flight Direction: </label>
                            <label className="radio-inline col-xs-3">
                              <input type="radio" name="optFlight" defaultValue="A" />A
                            </label>
                            <label className="radio-inline col-xs-3">
                              <input type="radio" name="optFlight" defaultValue="D" />D
                            </label>
                          </div>
                        </form>
                      </li>
                      <li id="look-direction">
                        <form className="form-horizontal" role="form">
                          <div className="form-group">
                            <label htmlFor="radio" className="col-xs-5">Look Direction: </label>
                            <label className="radio-inline col-xs-3">
                              <input type="radio" name="optLook" defaultValue="L" />L
                            </label>
                            <label className="radio-inline col-xs-3">
                              <input type="radio" name="optLook" defaultValue="R" />R
                            </label>
                          </div>
                        </form>
                      </li>
                      <li id="polarization">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputPolarization" className="col-xs-4">Polarization: </label>
                            <div className="col-xs-8">
                              <input type="text" className="form-control" id="inputPolarization" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="processing-level">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputProccessingLevel" className="col-xs-4">Processing Level: </label>
                            <div className="col-xs-8">
                              <input type="text" className="form-control" id="inputProcessingLevel" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="collection">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputCollection" className="col-xs-4">Collection: </label>
                            <div className="col-xs-8">
                              <input type="text" className="form-control" id="inputCollection" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="max-results">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputMaxResults" className="col-xs-4">Max Results: </label>
                            <div className="col-xs-8">
                              <input type="number" className="form-control" id="inputMaxResults" placeholder max={10000} />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="min-doppler">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputMinDoppler" className="col-xs-4">Min Doppler: </label>
                            <div className="col-xs-8">
                              <input type="number" className="form-control" id="inputMinDoppler" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="max-doppler">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputMaxDoppler" className="col-xs-4">Max Doppler: </label>
                            <div className="col-xs-8">
                              <input type="number" className="form-control" id="inputMaxDoppler" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="min-faraday">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputMinFaraday" className="col-xs-4">Min Faraday: </label>
                            <div className="col-xs-8">
                              <input type="number" className="form-control" id="inputMinFaraday" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="max-faraday">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputMaxFaraday" className="col-xs-4">Max Faraday: </label>
                            <div className="col-xs-8">
                              <input type="number" className="form-control" id="inputMaxFaraday" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="min-baseline">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputMinBaseline" className="col-xs-4">Min Baseline: </label>
                            <div className="col-xs-8">
                              <input type="number" className="form-control" id="inputMinBaseline" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="max-baseline">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputMaxBaseline" className="col-xs-4">Max Baseline: </label>
                            <div className="col-xs-8">
                              <input type="number" className="form-control" id="inputMaxBaseline" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="min-stack-size">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputMinStackSize" className="col-xs-4">Min Stack Size: </label>
                            <div className="col-xs-8">
                              <input type="number" className="form-control" id="inputMinStackSize" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="max-stack-size">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputMaxStackSize" className="col-xs-4">Max Stack Size: </label>
                            <div className="col-xs-8">
                              <input type="number" className="form-control" id="inputMaxStackSize" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="intersects">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="inputIntersects" className="col-xs-4">Intersects: </label>
                            <div className="col-xs-8">
                              <input type="text" className="form-control" id="inputIntersects" placeholder />
                            </div>
                          </div>    
                        </form>
                      </li>
                      <li id="search"><button id="searchButton" className="btn">Search</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Scenes */}
          <div id="scenes" className="row">
            <div className="container-fluid">
              <div className="panel-group">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" href="#collapse1">Scenes</a>
                    </h4>
                  </div>
                  <div id="collapse1" className="panel-collapse collapse">
                    <div className="btn-group btn-group-justified">
                      <div className="table-responsive">          
                        <table className="table">
                          <thead>
                            <tr>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">Collection
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">Platform
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">Absolute Orbit
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">Start Time
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">Stop Time
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">Relative Orbit
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">First Frame
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">Final Frame
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">Beam Mode
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">Swath
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">flight Direction
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">Polorization
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">Level
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">Stack Size
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                              <th>
                                <div className="btn-group dropdown-toggle">
                                  <button type="button" className="btn btn-info" data-toggle="dropdown">Data File
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Sort Acending</a></li>
                                    <li><a href="#">Sort Decending</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Group By This Field</a></li>
                                    <li><a href="#">Show In Groups</a></li>
                                  </ul>
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Component;