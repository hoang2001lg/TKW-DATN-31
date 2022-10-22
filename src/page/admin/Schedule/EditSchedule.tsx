import React, { useEffect } from 'react'
import {useForm,SubmitHandler}  from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { readpack } from '../../../API/packages';
import { readsche } from '../../../API/schedule';

type Input = {
    pt_id: string;
    contract_id: string;
    time_id: string,
    date: string,
    status: string
}

type EditScheProps = {
    onUpdateSche:(schedules :Input)=>void
  }

const EditSchedule = (props: EditScheProps) => {
    const {register,handleSubmit,formState:{errors},reset} = useForm<Input>();
  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
      const getSchedules= async()=>{
          const{data}= await readsche(id);
          reset(data)
      }
      getSchedules();
  },[])
  const onSubmit :SubmitHandler<Input> = data =>{
    props.onUpdateSche(data)
    navigate('/admin/schedules')

  }
  return (
    <div>
    <div className="bg-white">
      <h2 className=" text-xl uppercase pt-4">Sửa ngày làm</h2> <br />
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-3">
      <label htmlFor="pt_id" className="form-label">PT</label>
      <input type="text" {...register('pt_id')} className="form-control" id="pt_id" aria-describedby="pt_id" />
    </div>
    <div className="mb-3">
    <label htmlFor="contract_id" className="form-label">Hợp đồng</label>
      <input type="text" {...register('contract_id')} className="form-control" id="contract_id" aria-describedby="contract_id" />
    </div>
    <div className="mb-3">
    <label htmlFor="time_id" className="form-label">Thời gian</label>
      <input type="text" {...register('time_id')} className="form-control" id="time_id" aria-describedby="time_id" />
    </div>
    <div className="mb-3">
    <label htmlFor="date" className="form-label">Thời gian</label>
      <input type="text" {...register('date')} className="form-control" id="date" aria-describedby="date" />
    </div>
    <div className="mb-3">
    <label htmlFor="status" className="form-label">Thời gian</label>
      <input type="text" {...register('status')} className="form-control" id="status" aria-describedby="status" />
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

export default EditSchedule