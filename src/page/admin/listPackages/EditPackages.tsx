import React, { useEffect } from 'react'
import {useForm,SubmitHandler}  from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { readpack } from '../../../API/packages';

type Input = {
    name : string;
    subject : string;
    category  : string;
    price : number;
    price_sale : number;
    act : string
}

type EditPackProps = {
    onUpdatePack:(packagess :Input)=>void
  }

const EditPackages = (props: EditPackProps) => {
    const {register,handleSubmit,formState:{errors},reset} = useForm<Input>();
  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
      const getPackagess= async()=>{
          const{data}= await readpack(id);
          reset(data)
      }
      getPackagess();
  },[])
  const onSubmit :SubmitHandler<Input> = data =>{
    props.onUpdatePack(data)
    navigate('/admin/packagess')

  }
  return (
    <div>
    <div className="bg-white">
      <h2 className=" text-xl uppercase pt-4">Thêm gói tập</h2> <br />
      <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Tên gói tập</label>
      <input type="text" {...register('name')} className="form-control" id="name" aria-describedby="name" />
      {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
    </div>
    <div className="mb-3">
    <label htmlFor="subject" className="form-label">Bộ môn</label>
      <input type="text" {...register('subject')} className="form-control" id="subject" aria-describedby="subject" />
      {errors.subject && <span>Bắt buộc phải nhập trường này!</span>}
    </div>
    <div className="mb-3">
    <label htmlFor="category" className="form-label">Thể loại</label>
      <input type="text" {...register('category')} className="form-control" id="category" aria-describedby="category" />
      {errors.category && <span>Bắt buộc phải nhập trường này!</span>}
    </div>
    <div className="row">
  <div className="col">
  <label htmlFor="price" className="form-label">Giá niêm yết</label>
    <input type="number" {...register('price')} className="form-control" placeholder="price" aria-label="price" />
    {errors.price && <span>Bắt buộc phải nhập trường này!</span>}
  </div>
  <div className="col">
  <label htmlFor="price_sale" className="form-label">Giá sale</label>
    <input type="number" {...register('price_sale')} className="form-control" placeholder="price_sale" aria-label="price_sale" />
    {errors.price_sale && <span>Bắt buộc phải nhập trường này!</span>}
  </div>
</div>
<div className="mb-3">
    <label htmlFor="act" className="form-label">Hành động</label>
      <input type="text" {...register('act')} className="form-control" id="act" aria-describedby="act" />
      {errors.category && <span>Bắt buộc phải nhập trường này!</span>}
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

export default EditPackages