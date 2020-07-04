import React from 'react'
import Row from 'components/Row'
import Avatar from 'components/Avatar'
import { profile } from 'mocks/profile'

function Profile() {
  return (
    <Row>
      <Avatar size="120px" src={profile.avatarImg} border="red" />
      <h1>{profile.name}</h1>
      <h1>{profile.email}</h1>
      <h1>{profile.statusMessage}</h1>
    </Row>
  )
}

export default Profile
