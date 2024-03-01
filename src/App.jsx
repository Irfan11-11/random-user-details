import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userInfo, setuserInfo] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('white'); 

  const getRandomUser = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const allUsers = await response.json();
      console.log(allUsers);

      const randomUsers = allUsers[Math.floor(Math.random() * allUsers.length)];
      setuserInfo({
        users: randomUsers?.firstName,
        users: randomUsers?.lastName,
        users: randomUsers?.gender,
        users: randomUsers?.image,
        users: randomUsers?.birthDate,
        users: randomUsers?.age,
        users: randomUsers?.height,
        users: randomUsers?.weight,
        users: randomUsers?.phone,
        users: randomUsers?.email,
        users: randomUsers?.address,
        company: randomUsers?.company?.name,    
        company: randomUsers?.company?.city,    
        company: randomUsers?.company?.title,    

      });

      // Change background color
      setBackgroundColor(getRandomColor());
    } catch (err) {
      console.log(err);
    }
  };

  const getRandomColor = () => {
    const colors = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow',]; 
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    getRandomUser();
  }, []); 
  
  return (
    <div className="App">
      <div className="container">
        <div className="center-container">
          <h1 className="text-warning text-center mb-3">Random User Details On Refresh</h1>
          <div id="result" className="card p-3 w-100" style={{ backgroundColor: backgroundColor }}>
            {userInfo && (
              <div>
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <img className="img-fluid" src={userInfo?.image} alt="User img" />
                    <h3 className="text-center">{userInfo?.firstName} {userInfo?.lastName}</h3>
                    <h5> {userInfo?.gender}</h5>
                    <br />
                  </div>
                  <div className="col-lg-6">
                    <div className="list-group">
                      <div className="list-group-item">Date of Birth : {userInfo?.birthDate}</div>
                      <div className="list-group-item">Age : {userInfo?.age}</div>
                      <div className="list-group-item">Weight : {userInfo?.weight}</div>
                      <div className="list-group-item">Height : {userInfo?.height}</div>
                      <div className="list-group-item">Home Adress : {userInfo?.address}</div>
                      <div className="list-group-item">Phone : {userInfo?.phone}</div>
                      <div className="list-group-item">Company : {userInfo?.address?.name}</div>
                      <div className="list-group-item">Job Title :  {userInfo?.address?.city}</div>
                      <div className="list-group-item">Email : {userInfo?.email}</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <button onClick={getRandomUser} className="btn btn-success">Refresh</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;