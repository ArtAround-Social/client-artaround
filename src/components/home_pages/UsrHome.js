import Async from 'react-async';
import React from 'react';
import { useAuth0 } from '../../AuthProvider';
import { findUserByAuthId } from '../../services/userApi';
import UserForm from '../auth-header/UserForm';
import FileUpload from '../file-upload/FileUpload';
import AuthHeader from '../auth-header/AuthHeader';

const whoDis = ({ userSub }) => findUserByAuthId({ userAuth0Id: userSub });

const MyComponent = () => {
  const { user } = useAuth0();
  if(user){
    // console.log(user.sub);
    return(
      <Async promiseFn={whoDis} userSub={user.sub}>
        {({ data, error, isLoading }) => {
          // console.log(user.sub);
          if(isLoading) return('Loading...');
          if(error) return(`Something went wrong: ${error.message}`);
          if(data){
            if(!data.userAuth0Id){ return(
              <>
                <UserForm userAuth0Id={user.sub} />
                <strong>Loaded some data:</strong>
                <FileUpload />
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </>); 
            } else {return(
              <>
                <AuthHeader />
                <p>{JSON.stringify(data, null, 2)}</p>
              </>);
            }
          }
          return null;
        }}
      </Async>
    );
  }
  return<h1>Getting There... . . .  .  .  .   .   .   .</h1>;
};

export default MyComponent;
