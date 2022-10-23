import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type AddSubjectProps = {
  onAddSubject: (subject: formInput) => void,
}
type formInput = {
  name: string,
  description: string
}

const Addsubject = (props: AddSubjectProps) => {

  const { register, handleSubmit, formState: { errors } } = useForm<formInput>();
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<formInput> = (data) => {
    props.onAddSubject(data)
    navigate('/admin/subject')

  }
  return (
    <div>
      <div className="bg-white">
        <h2 className=" text-xl uppercase pt-4">Thêm Bộ Môn</h2> <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Tên Bộ Môn</label>
            <input type="text" {...register('name')} className="form-control" id="name" aria-describedby="name" />
            {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="act" className="form-label">Mô Tả</label>
            <input type="text" {...register('description')} className="form-control" id="act" aria-describedby="act" />
            {errors.description && <span>Bắt buộc phải nhập trường này!</span>}
          </div>
          <div className='text-center'>
            <button className="btn btn-danger">Cancel</button>
            <button className="btn btn-primary">Add new</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Addsubject