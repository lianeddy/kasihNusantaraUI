import Router from 'next/router';
import axios from 'axios';
import API from '../../APIURL'

export const register = ({ username, password, email, verified, saldo, roleId }) => {
    return (dispatch) => {
      axios.post(`${API}/user/register`, {username, password, email, verified, saldo, roleId })
        .then((res) => {
          Router.push('/signin');
          console.log(res.data);
          dispatch({
            type: USER,
            payload: res.data
          })
        })
        .catch((err) => {
          console.log(err)
        });
  
    };
};