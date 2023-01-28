import React, { useEffect, useState } from 'react';
import logo from '../../assets/seu_low.png';
import bgImage from '../../assets/register-bg.jpg';
import svgImage from '../../assets/undraw_mobile_login_re_9ntv.svg';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Error from '../ui/Error';
import axios from 'axios'

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('Dhaka');
  const [birthday, setBirthday] = useState('12 May, 1999');
  const [gender, setGender] = useState('male');
  const roleOptions = ["student", "faculty", "admin"]; 
  const [role, setRole] = useState(roleOptions[0]);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (
      email &&
      password &&
      repeatPassword &&
      firstName &&
      lastName &&
      phone &&
      address &&
      birthday &&
      gender) {
      if (password !== repeatPassword) {
        setError('Password not match');
      } else {
        await axios.post("http://localhost:5000/api/users/",{
          username: firstName + lastName,email,password,phone,
          address,gender,birthday,role
        })
        .then(res=>{
          console.log(res.data.check); 
          if(res.data==="exist"){
            alert("User already exists"); 
          }
          else if(res.data==="notexist"){
            navigate("/add-user");
            alert("User added");
            e.target.reset();
          }
        })
        .catch(e=>{
          alert("Server Error"); 
          console.log(e); 
        })
      }
    }
  }

  return (
    <div className="md:flex justify-center items-center h-screen bg-center bg-no-repeat bg-cover">
      <div className="mx-auto md:flex  justify-between items-center animate-zoomIn  bg-white px-10 py-6 rounded-lg shadow-2xl">
        <form onSubmit={handleSubmit} className="w-96 mx-auto">
          <img className="w-24 mx-auto mt-0 md:-mt-14" src={logo} alt="seu_logo"/>
          <h2 className="mb-6 mt-4 text-3xl font-bold text-center "> Create User Account</h2>
          
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="firstName"
                id="floating_first_name"
                // value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block py-2.5 px-0 w-full bg-white text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="lastName"
                id="floating_last_name"
                // value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>


          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              id="floating_email"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium 
              absolute text-sm left-0 text-gray-500 duration-300 transform 
              -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
              peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6">
              Email address
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute left-0 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="password"
                name="repeat_password"
                id="floating_repeat_password"
                // value={repeatPassword}
                onChange={(e) => {
                  setRepeatPassword(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                name="phone"
                id="floating_phone"
                // value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="address"
                id="floating_address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_address"
                className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="birthday"
                id="floating_birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_birthday"
                className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Birthday
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="gender"
                id="floating_gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_gender"
                className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Gender
              </label>
            </div>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <label
              htmlFor="floating_email" className="mr-5 ">
              Role
            </label>
            {/* <select name="role" id="role" 
            onChange={(e) => {setRole(e.target.value);}}
            class="select bg-gray-50 select-bordered select-sm w-full ">
              <option defaultValue>student</option>
              <option>faculty</option>
              <option>admin</option>
            </select> */}
            <select 
              className="select bg-gray-50 select-bordered select-sm w-full "
              value={role} 
              onChange={e => setRole(e.target.value)}>
                {roleOptions.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
          </div>
          {error && <Error message={error} />} 
          <button
            type="submit"
            className="text-white bg-blue-700 disabled:cursor-not-allowed hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
