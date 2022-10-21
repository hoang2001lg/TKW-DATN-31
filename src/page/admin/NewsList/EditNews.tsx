import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { readPosts } from "../../../API/Newlist";
import { TypeSubject } from "../../../Type/TypeSubject";

type Inputs = {
    id: number;
    title:string,
    content:string,
    subject_id:string,
    user_id:string,
    status:string,
};
type NewsUpdateProps = {
  subjects: TypeSubject[];
  onUpdatePost: (news: Inputs) => void;
};
type FormInputs = {
    id: number;
    title:string,
    content:string,
    subject_id:string,
    user_id:string,
    status:string,
  }
const EditNews = (props: NewsUpdateProps) => {
    const { register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getCoach = async () => {
            const { data } = await readPosts(id);
            reset(data);
        }
        getCoach();
    },[]);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdatePost(data)
        navigate("/admin/Posts");
    }
  return (
    <div className="container text-start ">
      <div className="bg-white">
        <strong className=" text-xl uppercase pt-4">
          Sửa Bài Viết
        </strong>
        <br />
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className=" uppercase md:text-sm text-left text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Tiêu Đề<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-100 p-3 border border-gray-300 p-2 w-full"
                {...register("title")}
                placeholder="Title"
              />
            </div>
            <div className="mb-3">
              <label className=" uppercase md:text-sm text-left text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Nội Dung<span className="text-red-500">*</span>
              </label>
              <br />
              <textarea
                rows={4} cols={50}

                className="w-100 p-3 border border-gray-300 p-2 w-full"
                {...register("content")}
                placeholder="content"
              />
            </div>
            <div className="mb-3">
              <label className=" uppercase md:text-sm text-left text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                ID Bộ Môn<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-100 p-3 border border-gray-300 p-2 w-full"
                {...register("subject_id")}
                placeholder="subject_id"
              />
            </div>
            <div className="mb-3">
              <label className=" uppercase md:text-sm text-left text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                ID Người Dùng<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-100 p-3 border border-gray-300 p-2 w-full"
                {...register("user_id")}
                placeholder="user_id"
              />
            </div>

            {/*<div className="mb-3">
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
            </div> */}
            <div className="mb-3">
              <label className=" uppercase md:text-sm text-left text-xs text-gray-500 text-gray-600 font-semibold mb-1">
                Trạng Thái<span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-100 p-3 border border-gray-300 p-2 w-full"
                {...register("status")}
                placeholder="Trạng thái"
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
  );
};

export default EditNews;
