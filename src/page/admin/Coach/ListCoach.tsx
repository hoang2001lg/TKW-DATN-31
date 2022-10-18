import React from "react";
import { Link } from "react-router-dom";
import { CoachType } from "../../../Type/CoachType";
type CoachManagerProps = {
  coachs: CoachType[];

  onRemoveCoach: (id: number) => void;
};

const ListCoach = (props: CoachManagerProps) => {
  return (
    <div>
      <h2 className="mx-auto text-blue-600 text-4xl">Receptionists List</h2>
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
                    <button className=" bg-green-500 text-white ml-10">
                      <a href="coach/add">ADD NEW</a>
                    </button>
                  </td>
                </thead>
                <tbody>
                  {props.coachs.map((item: any, index) => {
                    return (
                      <tr>
                        <td></td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.telephone}
                        </td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.address}
                        </td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.email}
                        </td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.subject}
                        </td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.stasus}
                        </td>
                        <td className="border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.action}
                        </td>
                        <div className="mt-4">
                          <Link
                            className="rounded-md bg-blue-400 text-white mt-20 mr-2"
                            to={`${item.id}/edit`}
                          >
                            UPDATE
                          </Link>
                          <button
                            className="bg-red-500 text-white"
                            onClick={() => props.onRemoveCoach(item.id)}
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
export default ListCoach;
