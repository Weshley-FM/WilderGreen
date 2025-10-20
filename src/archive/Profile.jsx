import React from 'react'

export default function Profile(){
  return (
    <div className="container section profile-page">
      <h1>Your Profile</h1>
      <p>Name: <strong>Guest</strong></p>
      <p>Member since: <em>Not signed in</em></p>
      <p>Upcoming RSVPs: <strong>0</strong></p>
      <a className="btn outline" href="#">Edit Profile</a>
    </div>
  )
}
