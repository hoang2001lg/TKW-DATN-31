import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

type Input = {
  name: string,
  code: number;
  img: string;
  phone: number;
  age: number;
  address: string;
  job: string;
}

type AddProps = {
  onAdd: (receptions: Input) => void
}

const AddReceptionist = (props: AddProps) => {

  const { register, handleSubmit, formState: { errors } } = useForm<Input>();
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Input> = (dataInput) => {
    props.onAdd(dataInput)
    navigate('/receptionist')

  }
  // Call API
  return (
    <div>
      <div className="bg-white">
        <strong className=" text-xl uppercase pt-4">Thêm gói tập</strong> <br />
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
          <form id="form-add-pro" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Receptionist name<span className="text-red-500">*</span></label><br />
              <input type="text" {...register('name')} className="border border-gray-300 p-2 w-full" id="name" />
            </div>

            <div className="mb-3 grid grid-cols-2 gap-6">
              <div>
                <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Age<span className="text-red-500">*</span></label><br />
                <input type="number" {...register('age')} className="border border-gray-300 p-2 w-full" id="age" />
              </div>
              <div>
                <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Image<span className="text-red-500">*</span></label><br />
                <input type="text" {...register('img')} className="border border-gray-300 p-2 w-full" id="image" />
              </div>
            </div>
            <div className="mb-3 grid grid-cols-2 gap-6">
              <div>
                <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Receptionist code<span className="text-red-500">*</span></label><br />
                <input type="number" {...register('code')} className="border border-gray-300 p-2 w-full" id="code receptionist" />
              </div>
              <div>
                <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Phone number<span className="text-red-500">*</span></label><br />
                <input type="number" {...register('phone')} className="border border-gray-300 p-2 w-full" id="phone" />
              </div>
            </div>
            <div className="mb-3">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Address<span className="text-red-500">*</span></label><br />
              <textarea {...register('address')} className="w-full sec p-3 h-60 border border-gray-300 " id="act" placeholder="address" defaultValue={""} />
            </div>
            <div className="mb-3">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Job<span className="text-red-500">*</span></label><br />
              <textarea {...register('job')} className="w-full sec p-3 h-60 border border-gray-300 " id="act" placeholder="job" defaultValue={""} />
            </div>
            <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
              <button className="btn btn-danger">Cancel</button>
              <button className="btn btn-primary">Add new</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddReceptionist