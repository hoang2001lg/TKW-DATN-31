import React from 'react'
import { Link } from 'react-router-dom';
import { ContactType } from '../../../Type/Contact';

type ContactRemove = {
    contacts : ContactType[];
    onRemoveContact : (id:number) => void
}

const ListContact = (props: ContactRemove) => {
  return (
    <div>
        <div className="bg-white">
      <h2 className=" text-xl uppercase pt-4">Danh sách bình luận</h2> <br />
  <table className="table table-bordered border-primary">
    <thead>
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Tên</th>
        <th scope="col">Email</th>
        <th scope="col">Số điện thoại</th>
        <th scope="col">Bình luận</th>
        <th scope="col">Chức năng</th>
      </tr>
    </thead>
    <tbody>
    {props.contacts.map((item:any, index) => (
      <tr key={index}>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.comment}</td>
        <td>
        <Link className='btn btn-primary' to={`${item.id}/edit`}>Edit</Link>
        <button className="btn btn-danger" onClick={() => props.onRemoveContact(item.id)}>DELETE</button>
        </td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
  )
}

export default ListContact