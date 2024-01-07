import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function profile() {
  return (
    <>
        <Topbar />
        <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
                <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
                <div className="profileInfo">
                    <h4 className="profilInfoName">Kandarp</h4>
                    <span className="profilInfoDesc">Hello my friends. How are you?</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
            </div>
            
        </div>
        </div>
    </>
  )
}
