import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { initialUser } from '../config';
import ProfileEditor from '../component/profileEditor';
import PersonalInfo from '../component/personalInfo';
import AboutMe from '../component/aboutMe';
import Tags from '../component/tags';

function ProfilePage() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(initialUser);
  const [editForm, setEditForm] = useState({ ...initialUser });

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} mt={3}>
        <PersonalInfo 
          user={user}
          setEditForm={setEditForm}
          setOpen={setOpen} 
        />
        <Grid item xs={12} md={8}>  
          <AboutMe user={user} />
          <Tags />
        </Grid>
      </Grid>
      <ProfileEditor
        open={open}
        setOpen={setOpen}
        setUser={setUser}
        setEditForm={setEditForm}
        editForm={editForm}
      />

    </Container>
  );
};

export default ProfilePage;
