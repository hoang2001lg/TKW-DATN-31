import React, { useEffect } from 'react'
import {useForm,SubmitHandler}  from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { readcontact } from '../../../API/contact';

type Input = {
    name : string;
    email: string;
    phone: number;
    comment: string
}

type EditContactProps = {
    onUpdateContact:(contacts :Input)=>void
  }

const EditContact = (props: EditContactProps) => {
    const {register,handleSubmit,formState:{errors},reset} = useForm<Input>();
  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
      const getContacts= async()=>{
          const{data}= await readcontact(id);
          reset(data)
      }
      getContacts();
  },[])
  const onSubmit :SubmitHandler<Input> = data =>{
    props.onUpdateContact(data)
    navigate('/admin/contacts')

  }
  return (
    <div>
    <div className="bg-white">
      <h2 className=" text-xl uppercase pt-4">Sửa bình luận</h2> <br />
      <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Tên</label>
      <input type="text" {...register('name')} className="form-control" id="name" aria-describedby="name" />
      {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
    </div>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
      <input type="email" {...register('email')} className="form-control" id="email" aria-describedby="email" />
      {errors.email && <span>Bắt buộc phải nhập trường này!</span>}
    </div>
    <div className="mb-3">
    <label htmlFor="phone" className="form-label">Số điện thoại</label>
      <input type="number" {...register('phone')} className="form-control" id="phone" aria-describedby="phone" />
      {errors.phone && <span>Bắt buộc phải nhập trường này!</span>}
    </div>
<div className="mb-3">
    <label htmlFor="comment" className="form-label">Bình luận</label>
      <input type="text" {...register('comment')} className="form-control" id="comment" aria-describedby="comment" />
      {errors.comment && <span>Bắt buộc phải nhập trường này!</span>}
    </div>
    <div className='text-center'>
    <button className="btn btn-danger">Cancel</button>
    <button className="btn btn-primary">Update</button>
    </div>
  </form>
</div>
</div>
  )
}

export default EditContact