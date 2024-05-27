// import React, { useState } from 'react';
// import './Form.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import image2 from '../../assets/images/vector_14_x2.svg';
// import image1 from '../../assets/images/icon_10_x2.svg';
// import image3 from '../../assets/images/vector_41_x2.svg';
// import image4 from '../../assets/images/vector_20_x2.svg';
// import image5 from '../../assets/images/vector_26_x2.svg';
// import { register, login } from '../../services/authService';

// const Form = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegister, setIsRegister] = useState(true);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let response;
//       if (isRegister) {
//         response = await register({ name, email, password });
//         toast.success('User registered successfully!');
//       } else {
//         response = await login({ email, password });
//         toast.success('Logged in successfully!');
//       }
//       console.log('Response:', response);
//       setName('');
//       setEmail('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error during submission:', error);
//       toast.error('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="bg-dark relative p-custom w-custom box-sizing-border">
//           <div className="bg-image absolute center-x top-0 w-image h-image"></div>
//           <div className="relative flex flex-row justify-between w-content h-fit-content box-sizing-border">
//             <div className="bg-white m-margin-vertical w-bar h-bar"></div>
//             <span className="break-words font-inter font-semibold text-title tracking-title leading-title uppercase text-white">
//               Optimize your operations with AI
//             </span>
//           </div>
//           <div className="absolute right-custom bottom-custom flex flex-col items-center box-sizing-border">
//             {isRegister && (
//               <div className="bg-secondary m-bottom flex flex-row p-padding w-box box-sizing-border">
//                 <div className="m-icon-margin flex w-icon h-icon box-sizing-border">
//                   <img className="w-icon h-icon" src={image2} alt="icon" />
//                 </div>
//                 <div className="flex box-sizing-border">
//                   <input
//                     type="text"
//                     className="break-words font-inter font-light text-subtitle tracking-subtitle leading-subtitle text-subtitle-color"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//             )}
//             <div className="bg-secondary m-bottom flex flex-row p-padding w-box box-sizing-border">
//               <img className="m-icon-margin flex w-large-icon h-large-icon" src={image1} alt="icon" />
//               <div className="flex box-sizing-border">
//                 <input
//                   type="email"
//                   className="break-words font-inter font-light text-subtitle tracking-subtitle leading-subtitle text-subtitle-color"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="bg-secondary m-bottom flex flex-row p-padding w-box box-sizing-border">
//               <div className="m-icon-margin flex w-small-icon h-small-icon box-sizing-border">
//                 <img className="w-small-icon h-small-icon" src={image3} alt="icon" />
//               </div>
//               <div className="flex box-sizing-border">
//                 <input
//                   type="password"
//                   className="break-words font-inter font-light text-subtitle tracking-subtitle leading-subtitle text-subtitle-color"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//             {!isRegister && (
//               <div className="bg-secondary m-bottom-large flex flex-row p-padding w-box box-sizing-border">
//                 <div className="m-icon-margin flex w-icon h-icon box-sizing-border">
//                   <img className="w-icon h-icon" src={image4} alt="icon" />
//                 </div>
//                 <div className="flex box-sizing-border">
//                   <span className="break-words font-inter font-light text-subtitle tracking-subtitle leading-subtitle text-subtitle-color">
//                     Phone
//                   </span>
//                 </div>
//               </div>
//             )}
//             <div className="rounded-custom bg-dark-secondary flex flex-row justify-between p-button w-button box-sizing-border">
//               <button type="submit" className="m-button-margin w-button-text break-words font-inter font-semibold text-button tracking-button leading-button uppercase text-white">
//                 {isRegister ? 'Register' : 'Login'}
//               </button>
//               <div className="m-arrow-margin flex w-arrow h-arrow box-sizing-border">
//                 <img className="w-arrow h-arrow" src={image5} alt="arrow" />
//               </div>
//             </div>
//             <div className="flex mt-4">
//               <button type="button" className="text-white" onClick={() => setIsRegister(!isRegister)}>
//                 {isRegister ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Form;


import React, { useState } from 'react';
import './Form.css';
import image2 from '../../assets/images/vector_14_x2.svg';
import image1 from '../../assets/images/icon_10_x2.svg';
import image3 from '../../assets/images/vector_41_x2.svg';
import image4 from '../../assets/images/vector_20_x2.svg';
import image5 from '../../assets/images/vector_26_x2.svg';
import { register, login } from '../../services/authService';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        const response = await register(name, email, password);
        console.log(response);
      } else {
        const response = await login(email, password);
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-dark relative p-custom w-custom box-sizing-border">
        <div className="bg-image absolute center-x top-0 w-image h-image"></div>
        <div className="relative flex flex-row justify-between w-content h-fit-content box-sizing-border">
          <div className="bg-white m-margin-vertical w-bar h-bar"></div>
          <span className="break-words font-inter font-semibold text-title tracking-title leading-title uppercase text-white">
            Optimize your operations with AI
          </span>
        </div>
        <div className="absolute right-custom bottom-custom flex flex-col items-center box-sizing-border">
          {isRegister && (
            <div className="bg-secondary m-bottom flex flex-row p-padding w-box box-sizing-border">
              <div className="m-icon-margin flex w-icon h-icon box-sizing-border">
                <img className="w-icon h-icon" src={image2} alt="icon" />
              </div>
              <div className="flex box-sizing-border">
                <input
                  type="text"
                  className="break-words font-inter font-light text-subtitle tracking-subtitle leading-subtitle text-subtitle-color"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
          )}
          <div className="bg-secondary m-bottom flex flex-row p-padding w-box box-sizing-border">
            <img className="m-icon-margin flex w-large-icon h-large-icon" src={image1} alt="icon" />
            <div className="flex box-sizing-border">
              <input
                type="email"
                className="break-words font-inter font-light text-subtitle tracking-subtitle leading-subtitle text-subtitle-color"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="bg-secondary m-bottom flex flex-row p-padding w-box box-sizing-border">
            <div className="m-icon-margin flex w-small-icon h-small-icon box-sizing-border">
              <img className="w-small-icon h-small-icon" src={image3} alt="icon" />
            </div>
            <div className="flex box-sizing-border">
              <input
                type="password"
                className="break-words font-inter font-light text-subtitle tracking-subtitle leading-subtitle text-subtitle-color"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {!isRegister && (
            <div className="bg-secondary m-bottom-large flex flex-row p-padding w-box box-sizing-border">
              <div className="m-icon-margin flex w-icon h-icon box-sizing-border">
                <img className="w-icon h-icon" src={image4} alt="icon" />
              </div>
              <div className="flex box-sizing-border">
                <span className="break-words font-inter font-light text-subtitle tracking-subtitle leading-subtitle text-subtitle-color">
                  Phone
                </span>
              </div>
            </div>
          )}
          <div className="rounded-custom bg-dark-secondary flex flex-row justify-between p-button w-button box-sizing-border">
            <button type="submit" className="m-button-margin w-button-text break-words font-inter font-semibold text-button tracking-button leading-button uppercase text-white">
              {isRegister ? 'Register' : 'Login'}
            </button>
            <div className="m-arrow-margin flex w-arrow h-arrow box-sizing-border">
              <img className="w-arrow h-arrow" src={image5} alt="arrow" />
            </div>
          </div>
          <div className="flex mt-4">
            <button type="button" className="text-white" onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
