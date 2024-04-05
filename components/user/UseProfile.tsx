"use client"
import React, { useState } from "react";
import { Flex, Box, Heading, Text, Button } from'@chakra-ui/react'
// import { useUser } from "context/UserConpntext"; // Assuming a UserContext with user data

interface UserProfileProps {
  user: {
    // Define user data type
    name: string;
    email: string;
    // ... other user details
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  // State for editing profile
  const [isEditing, setIsEditing] = useState(false);

  // const { updateUserData } = useUser(); // Assuming a function to update user data

  // Edit profile form
  const EditProfileForm = () => {
    // Edit form fields and logic
  };

  return (
    <Box>
      <Heading as="h1">Profile</Heading>
      <Flex direction="column">
        <Text fontSize="sm">Name:</Text>
        <Box>{user?.name}</Box>
        <Text fontSize="sm">Email:</Text>
        <Box>{user?.email}</Box>
        {/* ... other user details */}
        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save" : "Edit"}
        </Button>
        {/* {isEditing && <EditProfileForm onSubmit={updateUserData} />} */}
      </Flex>
    </Box>
  );
};

export default UserProfile;
