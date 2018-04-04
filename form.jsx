import React from 'react';

export default class Form extends React.Component {
  
  render () {
    return (
      <div>
        <div className="panel panel-default renewel-edit-form">
            <div className="panel-heading">
                <div className="nav-tabs-custom ">
                    <ul className="nav nav-tabs header-nav">
                        <li className="active"><a>SKO</a></li>
                        <li><a>MIDYEAR</a></li>
                        <li ><a>AA90</a></li>
                        <li><a>PRODUCT LIST</a></li>
                    </ul>
                </div>
            </div>
            <div className="panel-body">
                <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="annualPrev" className="">Expected Annual PREV(in $Ks) <span className="text-danger">*</span></label>
                        <div className="">
                            <input id="annualPrev"type="text" className="form-control" placeholder="00"  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ncvi" className="">NCVI Expected(in $Ks)</label>
                        <div className="">
                            <input type="text" className="form-control" id="ncvi" placeholder="00" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="data" className="">Expected Close Date</label>
                        <div className="">
                            <input type="date" className="form-control" id="date" />
                        </div>
                    </div>
                    <div className="checkbox">
                        <label className="form-check-label">
                            <input type="checkbox" />
                            Prioritized Program Tag
                        </label> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="nextSteps" className="">
                            <span className="">Next Steps/Comments</span>
                            <span className="right padding-left-110">Max Chracters: 2000</span>
                        </label>
                        <div className="">
                            <input type="text" className="form-control" id="nextSteps" placeholder="Enter text here" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="myNotes" className="">
                            <span className="">My Notes</span>
                            <span className="right padding-left-220">Max Chracters: 2000</span>
                        </label>
                        <div className="">
                            <input type="text" className="form-control" id="myNotes" placeholder="Enter text here" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    );
  };
}
