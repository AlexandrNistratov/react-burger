import React, { FC } from 'react';
import styles from './profile.module.css';
import FormProfile from "../../components/UI/FormProfile/FormProfile";
import ProfileNav from "../../components/ProfileNav/ProfileNav";

const Profile: FC = () => {
    return (
        <div className={ styles.main }>
            <ProfileNav />
            <FormProfile/>
        </div>
    );
};

export default Profile;