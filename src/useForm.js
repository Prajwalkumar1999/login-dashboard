import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import validateInfo from './validateInfo';


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate=useNavigate();

  localStorage.setItem("editDetails",JSON.stringify(values));
  //localStorage.setItem("editdetails",JSON.stringify(newEditItem));

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({...values,[name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    

   
    if(validateInfo(values).isValid) {
      setIsSubmitting(true);
      navigate("/login")
    } else {
      setErrors(validateInfo(values).errors);
    }
   
  };

  useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;