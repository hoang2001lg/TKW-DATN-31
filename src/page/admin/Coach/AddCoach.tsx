import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  name: string;
  telephone: number;
  address: string;
  email: string;
  subject: string;
  stasus: string;
  action: string;
};
type CoachsAddProps = {
  onAddCoach: (coachs: Inputs) => void;
};
const AddCoach = (props: CoachsAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
    props.onAddCoach(dataInput);
    navigate("/coach");
  };
  return (
    <div>
      <div className="bg-white">
        <strong className=" text-xl uppercase pt-4">
          Thêm Huấn Luyện Viên
        </strong>{" "}
        <br />
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Tên Huấn Luyện Viên<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                {...register("name")}
                placeholder="Tên Huấn Luyện Viên"
              />
            </div>
            <div className="mb-3">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Số Điện Thoại<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="number"
                className="border border-gray-300 p-2 w-full"
                {...register("telephone")}
                placeholder="Số điện thoại"
              />
            </div>
            <div className="mb-3">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Địa chỉ<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                {...register("address")}
                placeholder="Địa chỉ"
              />
            </div>
            <div className="mb-3">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Email Huấn Luyện Viên <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                {...register("email")}
                placeholder="Email Huấn Luyện Viên"
              />
            </div>

            <div className="mb-3">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Bộ Môn<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                {...register("subject")}
                placeholder="Bộ Môn"
              />
            </div>
            <div className="mb-3">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Trạng Thái<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                {...register("stasus")}
                placeholder="Trạng thái"
              />
            </div>
            <div className="mb-3">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Hành Động<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                {...register("action")}
                placeholder="Hành động"
              />
            </div>
            <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
              <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
                Cancel
              </button>
              <button className="w-auto bg-red-600 hover:bg-blue-500 rounded-lg shadow-xl font-medium text-white px-4 py-2">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoach;
