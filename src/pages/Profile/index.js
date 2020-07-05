import React from 'react'
import Row from 'components/Row'
import Column from 'components/Column'
import Avatar from 'components/Avatar'
import { profile } from 'mocks/profile'
import Typography from 'components/Typography'

function Profile() {
  return (
    <Row>
      <Column
        margin="12px"
        size={12}
        justifyContent="center"
        background="#5A4E61"
      >
        <Column margin="90px" size={12} justifyContent="center">
          <Avatar size="120px" src={profile.avatarImg} border="green" />
        </Column>
        <Column
          margin="10px"
          size={12}
          justifyContent="center"
          background="#302934"
        >
          <Typography>
            Nome:
            {profile.name}
          </Typography>
          <Typography>
            Email:
            {profile.email}
          </Typography>

          <Typography>
            Status:
            {profile.statusMessage}
          </Typography>
        </Column>
      </Column>
    </Row>
  )
}

export default Profile
