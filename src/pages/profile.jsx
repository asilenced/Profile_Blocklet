import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import { initialUser } from '../config';
import ProfileEditor from '../component/profileEditor';
import PersonalInfo from '../component/personalInfo';
import AboutMe from '../component/aboutMe';
import Tags from '../component/tags';
import API_ENDPOINTS from '../config/apiConfig';
import axios from 'axios';

function ProfilePage() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({name: '', jobTitle: '', email: '', phone: '', bio: ''});
  const [loading, setLoading] = useState(false);
  // const [editForm, setEditForm] = useState({ ...initialUser });
  const [editForm, setEditForm] = useState({name: '', jobTitle: '', email: '', phone: '', bio: ''});

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.FETCH_USERS);
      console.log("front====>", response)
      setUser(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleSave = async (updatedProfile) => {
    console.log(updatedProfile)
    try {
      const response = await axios.put(API_ENDPOINTS.UPDATE_USER('1'), updatedProfile);
      setUser(response.data.data);
      setOpen(false);
    } catch (error) {
    }
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} mt={3}>
        <PersonalInfo 
          user={user}
          setOpen={setOpen}
          setEditForm={setEditForm} 
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
        onSave={handleSave}
        editForm={editForm}
      />

    </Container>
  );
};

export default ProfilePage;
