import React from "react";
import "./Footer.css";
import "./Saved.css";

class SavedContent extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <div className="modalheader">
          <div className="history">Сохранено</div>
          <div>
            <button className="btnX" onClick={onClick}>
              x
            </button>
          </div>
        </div>

        <div className="modalheader">
          <div style={{ flexGrow: "7" }}>
            <img
              src="https://img.icons8.com/android/24/000000/search.png"
              alt="search"
            />
          </div>
          <div style={{ flexGrow: "2" }}>
            <p>
              Сортировать по: |
              <img
                src="https://img.icons8.com/android/20/000000/sort-down.png"
                alt="sort-down"
              />
            </p>
          </div>
          <div style={{ flexGrow: "1" }}>
            <img
              src="https://ssl.gstatic.com/images/icons/material/system/1x/drive_spreadsheet_grey600_18dp.png"
              alt="google-slides"
            />
          </div>
        </div>
        <hr />
        <div className="modalheader">
          <div>Нет словосочетаний</div>
          <div>
            <img
              src="https://img.icons8.com/metro/20/000000/less-than.png"
              alt="less-than"
            />
          </div>
          <div>
            <img
              src="https://img.icons8.com/metro/20/000000/more-than.png"
              alt="more-than"
            />
          </div>
        </div>
        <hr />
        <div className="styleModalImg2">
          <img
            src="https://ssl.gstatic.com/translate/empty_phrasebook.png"
            alt="new-message"
          />
        </div>
      </div>
    );
  }
}
export { SavedContent };
