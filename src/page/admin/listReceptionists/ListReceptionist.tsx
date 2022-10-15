import React from "react";
import { Link } from "react-router-dom";
import { Receptionists } from "../../../Type/receptionists";

type ReceptionistRemove = {
    receptionist : Receptionists[];
    onRemove : (id:number) => void
}

const ListReceptionist = (props : ReceptionistRemove)=>{
    return(
        <div>
        <div className="bg-white">
      <h2 className=" text-xl uppercase pt-4">Danh sách lễ tân</h2> <br />
  <table className="table table-bordered border-primary">
    <thead>
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Tên</th>
        <th scope="col">Mã nhân viên</th>
        <th scope="col">Tuổi</th>
        <th scope="col">Ảnh</th>
        <th scope="col">Số điện thoại</th>
        <th scope="col">Địa chỉ</th>
        <th scope="col">Chức vụ</th>
        <th scope="col">Hành động</th>

      </tr>
    </thead>
    <tbody>
    {props.receptionist.map((item:any, index) => (
      <tr key={index}>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.code}</td>
        <td>{item.age}</td>
        <td><img src={item.img} alt="" width="120px"/></td>
        <td>{item.phone}</td>
        <td>{item.address}</td>
        <td>{item.job}</td>

        <td>
        <Link className='btn btn-primary'  to={`${item.id}/edit`}>Edit</Link>
        <button className="btn btn-danger" onClick={() => props.onRemove(item.id)}>DELETE</button>
        </td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
<div>
<button type="button" className="btn btn-info"><a href='receptionist/add' className='text-dark'>Add new</a></button>
</div>
</div>
        
    )
}
export default ListReceptionist