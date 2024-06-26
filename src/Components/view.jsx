import React from "react";
import Navbar from "./navbar";

const ViewSubscribers = () => {
  return (
    <div>
      <Navbar />
      <br />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl.No</th>
                      <th scope="col">Subscriber's Name</th>
                      <th scope="col">Newspaper</th>
                      <th scope="col">Rate/Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Valour</td>
                      <td>The Hindu</td>
                      <td>10$</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Valour</td>
                      <td>The Hindu</td>
                      <td>10$</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Valour</td>
                      <td>The Hindu</td>
                      <td>10$</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Valour</td>
                      <td>The Hindu</td>
                      <td>10$</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Valour</td>
                      <td>The Hindu</td>
                      <td>10$</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Valour</td>
                      <td>The Hindu</td>
                      <td>10$</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Valour</td>
                      <td>The Hindu</td>
                      <td>10$</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Valour</td>
                      <td>The Hindu</td>
                      <td>10$</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Valour</td>
                      <td>The Hindu</td>
                      <td>10$</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Valour</td>
                      <td>The Hindu</td>
                      <td>10$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSubscribers;
