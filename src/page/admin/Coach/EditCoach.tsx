import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { readCoach } from '../../../API/Coach';
import { CoachType } from '../../../Type/CoachType';
import { TypeSubject } from '../../../Type/TypeSubject';

type CoachEditProps = {
  onUpdateCoach: (coachs: CoachType) => void
  subjects: TypeSubject[];

}
type FormInputs = {
  name: string,
  telephone: number,
  address: string,
  email: string,
  subject: string,
  stasus: string,
  action: string
}

const EditCoach = (props: CoachEditProps) => {
  const { register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getCoach = async () => {
            const { data } = await readCoach(id);
            reset(data);
        }
        getCoach();
    },[]);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdateCoach(data)
        navigate("/admin/coach");
    }
  return (
    <div>
     <div className="container text-start ">
      <div className="bg-white">
        <strong className=" text-xl uppercase pt-4">
          Edit Huấn Luyện Viên
        </strong>{" "}
        <br />
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className=" uppercase md:text-sm text-left text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Tên Huấn Luyện Viên<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-100 p-3 border border-gray-300 p-2 w-full"
                {...register("name")}
                placeholder="Tên Huấn Luyện Viên"
              />
            </div>
            <div className="mb-3">
              <label className=" uppercase md:text-sm text-left text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Số Điện Thoại<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="number"
                className="w-100 p-3 border border-gray-300 p-2 w-full"
                {...register("telephone")}
                placeholder="Số điện thoại"
              />
            </div>
            <div className="mb-3">
              <label className=" uppercase md:text-sm text-left text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Địa chỉ<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-100 p-3 border border-gray-300 p-2 w-full"
                {...register("address")}
                placeholder="Địa chỉ"
              />
            </div>
            <div className="mb-3">
              <label className=" uppercase md:text-sm text-left text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Email Huấn Luyện Viên <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-100 p-3 border border-gray-300 p-2 w-full"
                {...register("email")}
                placeholder="Email Huấn Luyện Viên"
              />
            </div>

            <div className="mb-3">
              <label className=" uppercase md:text-sm text-left text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Bộ Môn<span className="text-red-500">*</span>
              </label>
              <br />
              <select id="subject" name="subject" className="w-100 p-3 border border-gray-300 p-2 w-full">
                </select>
                {props.subjects.map((childsubject)=>{
                  return(
                    <option key={childsubject.name}>{childsubject.name}</option>
                    )
                  }
                  )}
              </div>
            <div className="mb-3">
              <label className=" uppercase md:text-sm text-left text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Trạng Thái<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-100 p-3 border border-gray-300 p-2 w-full"
                {...register("stasus")}
                placeholder="Trạng thái"
              />
            </div>
            <div className="mb-3">
              <label className=" uppercase md:text-sm text-left text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Hành Động<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-100 p-3 border border-gray-300 p-2 w-full"
                {...register("action")}
                placeholder="Hành động"
              />
            </div>
            <div className="flex items-center row justify-center text-center md:gap-8 gap-4 pt-5 pb-5 p-5">
              <div className="m-3 col-5">
                <button className="w-25 bg-secondary rounded-lg shadow-xl font-medium text-white px-4 py-2">
                  Cancel
                </button>
              </div>
              <div className="m-3 col-5">
                <button className="w-25 bg-primary rounded-lg shadow-xl font-medium text-white px-4 py-2">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EditCoach