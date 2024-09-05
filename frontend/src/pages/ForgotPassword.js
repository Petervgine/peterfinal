// frontend/src/components/ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import forgotPasswordSend from '../assest/ForgotPasswordSend.gif';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleOnChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error('Error during password reset');
            console.error('Forgot password error:', error);
        }
    };

    return (
        <section id='forgot-password'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={forgotPasswordSend} alt='forgot password' />
                    </div>
                    <h2 className='text-center text-2xl font-bold mb-4'>Forgot Password</h2>
                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email: </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    name='email'
                                    value={email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'
                                    required
                                />
                            </div>
                        </div>
                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>
                            Reset Password
                        </button>
                    </form>
                    <p className='my-5 text-center'>
                        Remembered your password? <Link to={"/login"} className='text-red-600 hover:text-red-700 hover:underline'>Login</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
