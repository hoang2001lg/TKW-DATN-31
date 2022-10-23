import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { readSubject } from '../../../API/subject';
import { TypeSubject } from '../../../Type/TypeSubject';

type UpdateSubjectProps = {
  onUpdateSubject: (subject: TypeSubject) => void
}
type FormInputs = {
  id?: any,
  name: string,
  description: string
}
const Editsubject = (props: UpdateSubjectProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getSubject = async () => {
      const { data } = await readSubject(id);
      reset(data);
    }
    getSubject();
  }, [])
  const onSubmit: SubmitHandler<FormInputs> = data => {
    props.onUpdateSubject(data);
    navigate("/admin/subject");
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

export default Editsubject