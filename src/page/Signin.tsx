import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { signin, signup } from '../API/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormInputs = {
    name: string,
    email: string,
    password?: string | number
}
const Signin = () => {
    const { register, handleSubmit, formState} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const { data: user } = await signin(data);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
        alert('Đăng Nhập Thành Công');
    }
    return (
        <div>
            <Form style={{ maxWidth: '1200px', margin: 'auto',marginTop:'100px' }} onSubmit={handleSubmit(onSubmit)} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nhập Email Của Bạn</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register('email', {required: true})}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register('password', {required: true})}/>
                </Form.Group>
                <button style={{borderRadius:'5px',width:'550px',height:'40px',backgroundColor:'gray',marginLeft:'250px'}}>Đăng Nhập</button>
            </Form>
        </div>
    )
}
export default Signin