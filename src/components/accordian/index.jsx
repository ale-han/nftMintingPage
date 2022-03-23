import React from "react";
import "./accordian.scss";

export default function Accordian() {
  return (
    <>
      <div className="row">
        <div className="col">
          <div class="tabs">
            <div class="tab">
              <input type="checkbox" id="chck1" />
              <label class="tab-label" for="chck1">
                Item 1
              </label>
              <div class="tab-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
                reiciendis!
              </div>
            </div>
            <div class="tab">
              <input type="checkbox" id="chck2" />
              <label class="tab-label" for="chck2">
                Item 2
              </label>
              <div class="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
              </div>
            </div>
            <div class="tab">
              <input type="checkbox" id="chck3" />
              <label class="tab-label" for="chck3">
                Item 3
              </label>
              <div class="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
              </div>
            </div>
            <div class="tab">
              <input type="checkbox" id="chck4" />
              <label class="tab-label" for="chck4">
                Item 4
              </label>
              <div class="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
