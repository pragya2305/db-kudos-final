import React,{useEffect,useState} from 'react'
import Badges from './Badges.js';
import Contact from './Contact.js';
import Banner from './Banner.js';
import Header from './ProfileHeader';
import Navbar from './Navbar';
import Axios from "axios";



const Profile = ({getToken,products,setAuth,isAuth,badgeCount,setBadgeCount}) => {
  const [profileDetails, setProfileDetails] = useState({});
  const [localBadgeCount, setLocalBadgeCount] = useState([]);

  //{"e":{"email_id":"a1@gmail.com","name":"a1","dept":"Corporate bank","position":"Associate","bio":"Nobody cares","kudos_points":40,"kudos_spent":260},"badge_id":["Black","Blue"],"badge_count":[4,2],"badge_name":["Black","Blue"]}
  
  useEffect(() => {
    Axios.get("http://localhost:8081/profile/"+getToken().email).then((response) => {
      console.log("profileData", response.data)
      setProfileDetails(response.data.e);
       setLocalBadgeCount(response.data.badge_count)
      //console.log("test",response.data.badge_count)
    setAuth(true);
    });
   
  

  }, [])

  useEffect(() => {
    console.log("local",localBadgeCount)
  }, [localBadgeCount])

    return (
        <div>
        <Header getToken={getToken}
          isAuth={isAuth}
          setAuth={setAuth}
        />
          <Navbar />
        <Banner profileDetails={ profileDetails}/>
           <section className="skillheader" id="badges">
                    <h1 className='Badge-h1'>My Badges</h1>
                    <section className="flex-badges-container">
                {localBadgeCount.map((item,index)=>(
                       <figure  style={{padding:"1%"}}>
                    {item ? (<div><img src={products[index].img} width="200" height="200" /></div>):(null)}
                    {item ? (<h3>{products[index].title} x {item} </h3>) : (null)}
                       </figure>
                    ))}
                    </section>
            </section>
          <Contact profileDetails={ profileDetails}/> 
        </div>  )
}
export default Profile