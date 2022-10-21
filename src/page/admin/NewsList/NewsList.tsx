import React from "react";
import { Link } from "react-router-dom";
import { PostsType } from "../../../Type/PostsType";
type NewsManagerProps = {
  PostsList: PostsType[];
  onRemovePosts: (id: number) => void;
};

const NewsList = (props: NewsManagerProps) => {
  return (
    <div>
      <h2 className="mx-auto text-blue-600 text-4xl">Post List</h2>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center table table-bordered">
                <thead className="border-b">
                  <td className="text-sm font-medium text-gray-900 px-6 py-4 border">
                    Check box
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-6 py-4 border">
                    STT
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-6 py-4 border">
                    Tên Huấn Luyện Viên
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-6 py-4 border">
                    Số Điện Thoại
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-6 py-4 border">
                    Địa Chỉ
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-6 py-4 border">
                    Email
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-6 py-4 border">
                    Bộ Môn
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-6 py-4 border">
                    Trạng Thái
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-6 py-4 border">
                    Hành Động
                  </td>
                  <td
                    scope="col-2"
                    className="text-sm font-medium text-gray-900 px-6 py-4 border"
                  >
                    <button className=" bg-info text-white ml-10">
                      <a href="Posts/add">ADD NEW</a>
                    </button>
                  </td>
                </thead>
                <tbody>
                  {props.PostsList.map((item: any, index) => {
                    return (
                      <tr>
                        <td></td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.title}
                        </td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.content}
                        </td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.subject_id}
                        </td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.user_id}
                        </td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.status}
                        </td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.stasus}
                        </td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.action}
                        </td>
                        <div className="mt-4">
                          <button className="bg-secondary text-white ml-10">
                          <Link
                            className=""
                            to={`${item.id}/edit`}
                          >
                            UPDATE
                          </Link>
                          </button>
                          <button
                            className="bg-danger text-white"
                            onClick={() => props.onRemovePosts(item.id)}
                          >
                            DELETE
                          </button>
                        </div>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsList;
