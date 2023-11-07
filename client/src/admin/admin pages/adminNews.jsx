import React from "react";
import "../admincss/adminnews.css";
import AdminNav from "../../components/adminNavbar";

function AdminNews() {
  return (
    <div className="admin-news-page-edit-container">
      <div>
        <AdminNav />
      </div>
      <form>
        <div className="admin-news-first-row-edit">
          <h1 className="news-headingxxxx1">EDIT NEWS 1</h1>
          <div className="admin-news-card-edit-1">
            <div className="admin-news-card-edit-1-left">
              <label
                htmlFor="news1imageinput"
                className="news-poster-photo-upload-admin"
              >
                UPLOAD <br /> NEWS 1<br /> IMAGE
              </label>
              <input
                type="file"
                id="news1imageinput"
                className="news-admin-hidden-file-input"
                accept="image/*"
              />
            </div>
            <div className="admin-news-card-edit-1-right">
              <label
                for="news-heading-write1"
                className="news-heading-edit-admin"
              >
                Enter NEWS HEADING
              </label>
              <input
                type="text"
                className="news-heading-enter-text-admin"
                id="news-heading-write1"
                name="textValue"
              />
              <label
                for="news-desc-enter1"
                className="news-conntent-text-area-heading-admin"
              >
                Enter text:
              </label>
              <textarea
                className="news-conntent-text-area-content-admin"
                id="news-desc-enter1"
                name="text1Value"
                rows="4"
                cols="50"
              ></textarea>
            </div>
          </div>
          {/*THIS IS dcard ROW 2-------------------------------- */}
          <h1 className="news-headingxxxx">EDIT NEWS 2</h1>
          <div className="admin-news-card-edit-2">
            <div className="admin-news-card-edit-1-left">
              <label
                htmlFor="news2imageinput"
                className="news-poster-photo-upload-admin"
              >
                UPLOAD <br /> NEWS 1<br /> IMAGE
              </label>
              <input
                type="file"
                id="news2imageinput"
                className="news-admin-hidden-file-input"
                accept="image/*"
              />
            </div>
            <div className="admin-news-card-edit-1-right">
              <label
                for="news-heading-write2"
                className="news-heading-edit-admin"
              >
                Enter NEWS HEADING
              </label>
              <input
                type="text"
                className="news-heading-enter-text-admin"
                id="news-heading-write2"
                name="news-heading-write2"
              />
              <label
                for="news-desc-enter2"
                className="news-conntent-text-area-heading-admin"
              >
                Enter text:
              </label>
              <textarea
                className="news-conntent-text-area-content-admin"
                id="news-desc-enter2"
                name="textareaValue2"
                rows="4"
                cols="50"
              ></textarea>
            </div>
          </div>
          {/*THIS IS NEWS card 3-------------------------------- */}
          <h1 className="news-headingxxxx3">EDIT NEWS 3</h1>
          <div className="admin-news-card-edit-2">
            <div className="admin-news-card-edit-1-left">
              <label
                htmlFor="news3imageinput"
                className="news-poster-photo-upload-admin"
              >
                UPLOAD <br /> NEWS 1<br /> IMAGE
              </label>
              <input
                type="file"
                id="news3imageinput"
                className="news-admin-hidden-file-input"
                accept="image/*"
              />
            </div>
            <div className="admin-news-card-edit-1-right">
              <label
                for="news-heading-write3"
                className="news-heading-edit-admin"
              >
                Enter NEWS HEADING
              </label>
              <input
                type="text"
                className="news-heading-enter-text-admin"
                id="news-heading-write3"
                name="news-heading-write3"
              />
              <label
                for="news-desc-enter3"
                className="news-conntent-text-area-heading-admin"
              >
                Enter text:
              </label>
              <textarea
                className="news-conntent-text-area-content-admin"
                id="news-desc-enter3"
                name="textareaValue"
                rows="4"
                cols="50"
              ></textarea>
            </div>
          </div>
          {/*THIS IS NEWS card 4-------------------------------- */}
          <h1 className="news-headingxxxx3">EDIT NEWS 4</h1>
          <div className="admin-news-card-edit-2">
            <div className="admin-news-card-edit-1-left">
              <label
                htmlFor="news4imageinput"
                className="news-poster-photo-upload-admin"
              >
                UPLOAD <br /> NEWS 1<br /> IMAGE
              </label>
              <input
                type="file"
                id="news4imageinput"
                className="news-admin-hidden-file-input"
                accept="image/*"
              />
            </div>
            <div className="admin-news-card-edit-1-right">
              <label
                for="news-heading-write4"
                className="news-heading-edit-admin"
              >
                Enter NEWS HEADING
              </label>
              <input
                type="text"
                className="news-heading-enter-text-admin"
                id="news-heading-write4"
                name="news-heading-write4"
              />
              <label
                for="news-desc-enter4"
                className="news-conntent-text-area-heading-admin"
              >
                Enter text:
              </label>
              <textarea
                className="news-conntent-text-area-content-admin"
                id="news-desc-enter4"
                name="textareaValue"
                rows="4"
                cols="50"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdminNews;
