import React from 'react'

const Layout = () => {
  return (
    <div>
          <div className="pcoded-content">
            <div className="pcoded-inner-content">
              <div className="main-body">
                <div className="page-wrapper">
                  <div className="page-body">
                    <div className="row">
                      <div className="col-md-6 col-xl-3">
                        <div className="card widget-card-1">
                          <div className="card-block-small">
                            <i className="icofont icofont-pie-chart bg-c-blue card1-icon" />
                            <span className="text-c-blue f-w-600">Use space</span>
                            <h4>49/50GB</h4>
                            <div>
                              <span className="f-left m-t-10 text-muted">
                                <i className="text-c-blue f-16 icofont icofont-warning m-r-10" />Get more space
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* card1 end */}
                      {/* card1 start */}
                      <div className="col-md-6 col-xl-3">
                        <div className="card widget-card-1">
                          <div className="card-block-small">
                            <i className="icofont icofont-ui-home bg-c-pink card1-icon" />
                            <span className="text-c-pink f-w-600">Revenue</span>
                            <h4>$23,589</h4>
                            <div>
                              <span className="f-left m-t-10 text-muted">
                                <i className="text-c-pink f-16 icofont icofont-calendar m-r-10" />Last 24 hours
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* card1 end */}
                      {/* card1 start */}
                      <div className="col-md-6 col-xl-3">
                        <div className="card widget-card-1">
                          <div className="card-block-small">
                            <i className="icofont icofont-warning-alt bg-c-green card1-icon" />
                            <span className="text-c-green f-w-600">Fixed issue</span>
                            <h4>45</h4>
                            <div>
                              <span className="f-left m-t-10 text-muted">
                                <i className="text-c-green f-16 icofont icofont-tag m-r-10" />Tracked via microsoft
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* card1 end */}
                      {/* card1 start */}
                      <div className="col-md-6 col-xl-3">
                        <div className="card widget-card-1">
                          <div className="card-block-small">
                            <i className="icofont icofont-social-twitter bg-c-yellow card1-icon" />
                            <span className="text-c-yellow f-w-600">Followers</span>
                            <h4>+562</h4>
                            <div>
                              <span className="f-left m-t-10 text-muted">
                                <i className="text-c-yellow f-16 icofont icofont-refresh m-r-10" />Just update
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* card1 end */}
                      {/* Statestics Start */}
                      <div className="col-md-12 col-xl-8">
                        <div className="card">
                          <div className="card-header">
                            <h5>Statestics</h5>
                            <div className="card-header-left ">
                            </div>
                            <div className="card-header-right">
                              <ul className="list-unstyled card-option">
                                <li><i className="icofont icofont-simple-left " /></li>
                                <li><i className="icofont icofont-maximize full-card" /></li>
                                <li><i className="icofont icofont-minus minimize-card" /></li>
                                <li><i className="icofont icofont-refresh reload-card" /></li>
                                <li><i className="icofont icofont-error close-card" /></li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-block">
                            <div id="statestics-chart" style={{height: 517}} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-xl-4">
                        <div className="card fb-card">
                          <div className="card-header">
                            <i className="icofont icofont-social-facebook" />
                            <div className="d-inline-block">
                              <h5>facebook</h5>
                              <span>blog page timeline</span>
                            </div>
                          </div>
                          <div className="card-block text-center">
                            <div className="row">
                              <div className="col-6 b-r-default">
                                <h2>23</h2>
                                <p className="text-muted">Active</p>
                              </div>
                              <div className="col-6">
                                <h2>23</h2>
                                <p className="text-muted">Comment</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card dribble-card">
                          <div className="card-header">
                            <i className="icofont icofont-social-dribbble" />
                            <div className="d-inline-block">
                              <h5>dribble</h5>
                              <span>Product page analysis</span>
                            </div>
                          </div>
                          <div className="card-block text-center">
                            <div className="row">
                              <div className="col-6 b-r-default">
                                <h2>23</h2>
                                <p className="text-muted">Live</p>
                              </div>
                              <div className="col-6">
                                <h2>23</h2>
                                <p className="text-muted">Message</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card twitter-card">
                          <div className="card-header">
                            <i className="icofont icofont-social-twitter" />
                            <div className="d-inline-block">
                              <h5>twitter</h5>
                              <span>current new timeline</span>
                            </div>
                          </div>
                          <div className="card-block text-center">
                            <div className="row">
                              <div className="col-6 b-r-default">
                                <h2>25</h2>
                                <p className="text-muted">new tweet</p>
                              </div>
                              <div className="col-6">
                                <h2>450+</h2>
                                <p className="text-muted">Follower</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Email Sent End */}
                      {/* Data widget start */}
                      <div className="col-md-12 col-xl-6">
                        <div className="card project-task">
                          <div className="card-header">
                            <div className="card-header-left ">
                              <h5>Time spent : project &amp; task</h5>
                            </div>
                            <div className="card-header-right">
                              <ul className="list-unstyled card-option">
                                <li><i className="icofont icofont-simple-left " /></li>
                                <li><i className="icofont icofont-maximize full-card" /></li>
                                <li><i className="icofont icofont-minus minimize-card" /></li>
                                <li><i className="icofont icofont-refresh reload-card" /></li>
                                <li><i className="icofont icofont-error close-card" /></li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-block p-b-10">
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th>Project &amp; Task</th>
                                    <th>Time Spents</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="task-contain">
                                        <h6 className="bg-c-blue d-inline-block text-center">U</h6>
                                        <p className="d-inline-block m-l-20">UI Design</p>
                                      </div>
                                    </td>
                                    <td>
                                      <p className="d-inline-block m-r-20">4 : 36</p>
                                      <div className="progress d-inline-block">
                                        <div className="progress-bar bg-c-blue" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="task-contain">
                                        <h6 className="bg-c-pink d-inline-block text-center">R</h6>
                                        <p className="d-inline-block m-l-20">Redesign Android App</p>
                                      </div>
                                    </td>
                                    <td>
                                      <p className="d-inline-block m-r-20">4 : 36</p>
                                      <div className="progress d-inline-block">
                                        <div className="progress-bar bg-c-pink" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="task-contain">
                                        <h6 className="bg-c-yellow d-inline-block text-center">L</h6>
                                        <p className="d-inline-block m-l-20">Logo Design</p>
                                      </div>
                                    </td>
                                    <td>
                                      <p className="d-inline-block m-r-20">4 : 36</p>
                                      <div className="progress d-inline-block">
                                        <div className="progress-bar bg-c-yellow" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="task-contain">
                                        <h6 className="bg-c-green d-inline-block text-center">A</h6>
                                        <p className="d-inline-block m-l-20">Appestia landing Page</p>
                                      </div>
                                    </td>
                                    <td>
                                      <p className="d-inline-block m-r-20">4 : 36</p>
                                      <div className="progress d-inline-block">
                                        <div className="progress-bar bg-c-green" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="task-contain">
                                        <h6 className="bg-c-blue d-inline-block text-center">L</h6>
                                        <p className="d-inline-block m-l-20">Logo Design</p>
                                      </div>
                                    </td>
                                    <td>
                                      <p className="d-inline-block m-r-20">4 : 36</p>
                                      <div className="progress d-inline-block">
                                        <div className="progress-bar bg-c-blue" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-xl-6">
                        <div className="card add-task-card">
                          <div className="card-header">
                            <div className="card-header-left">
                              <h5>To do list</h5>
                            </div>
                            <div className="card-header-right">
                              <button className="btn btn-card btn-primary">Add task </button>
                            </div>
                          </div>
                          <div className="card-block">
                            <div className="to-do-list">
                              <div className="checkbox-fade fade-in-primary d-block">
                                <label className="check-task d-block">
                                  <input type="checkbox" defaultValue />
                                  <span className="cr">
                                    <i className="cr-icon icofont icofont-ui-check txt-default" />
                                  </span>
                                  <span><h6>Schedule Meeting with Compnes <span className="label bg-c-green m-l-10 f-10">2 week</span></h6></span>
                                  <div className="task-card-img m-l-40">
                                    <a href="#!"><img src="assets/images/avatar-2.jpg" data-toggle="tooltip" title="Lary Doe" alt className="img-40" /></a>
                                    <a href="#!"><img src="assets/images/avatar-3.jpg" data-toggle="tooltip" title="Alia" alt className="img-40 m-l-10" /></a>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="to-do-list">
                              <div className="checkbox-fade fade-in-primary d-block">
                                <label className="check-task d-block">
                                  <input type="checkbox" defaultValue />
                                  <span className="cr">
                                    <i className="cr-icon icofont icofont-ui-check txt-default" />
                                  </span>
                                  <span><h6>Meeting With HOD's and borad</h6><p className="text-muted m-l-40">23 january 2003</p></span>
                                </label>
                              </div>
                            </div>
                            <div className="to-do-list">
                              <div className="checkbox-fade fade-in-primary d-block">
                                <label className="check-task d-block">
                                  <input type="checkbox" defaultValue />
                                  <span className="cr">
                                    <i className="cr-icon icofont icofont-ui-check txt-default" />
                                  </span>
                                  <span><h6>Create template, admin with responsive<span className="label bg-c-pink m-l-10">2 week</span></h6></span>
                                  <div className="task-card-img m-l-40">
                                    <a href="#!"><img src="assets/images/avatar-2.jpg" data-toggle="tooltip" title="Alia" alt className="img-40" /></a>
                                    <a href="#!"><img src="assets/images/avatar-3.jpg" data-toggle="tooltip" title="Suzen" alt className="img-40 m-l-10" /></a>
                                    <a href="#!"><img src="assets/images/avatar-4.jpg" data-toggle="tooltip" title="Lary Doe" alt className="img-40 m-l-10" /></a>
                                    <a href="#!"><img src="assets/images/avatar-2.jpg" data-toggle="tooltip" title="Josephin Doe" alt className="img-40 m-l-10" /></a>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="to-do-list">
                              <div className="checkbox-fade fade-in-primary d-block">
                                <label className="check-task d-block">
                                  <input type="checkbox" defaultValue />
                                  <span className="cr">
                                    <i className="cr-icon icofont icofont-ui-check txt-default" />
                                  </span>
                                  <span><h6>Meeting With HOD's and borad</h6>
                                    <p className="text-muted m-l-40">23 january 2003</p></span>
                                  <div className="task-card-img m-l-40">
                                    <a href="#!"><img src="assets/images/avatar-2.jpg" data-toggle="tooltip" title="Lary Doe" alt className="img-40" /></a>
                                    <a href="#!"><img src="assets/images/avatar-3.jpg" data-toggle="tooltip" title="Alia" alt className="img-40 m-l-10" /></a>
                                    <a href="#!"><img src="assets/images/avatar-2.jpg" data-toggle="tooltip" title="Josephin Doe" alt className="img-40 m-l-10" /></a>
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Data widget End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Layout
