import React from 'react'
import { Link } from 'react-router-dom';
import { TypeSubject } from '../../../Type/TypeSubject';

type ListSubject = {
    subjects : TypeSubject[];
    onRemove : (id:number) => void
}

const ListSubject = (props: ListSubject) => {
  return (
    <div>
        <div className="bg-white">
      <h2 className=" text-xl uppercase pt-4">Danh sách Bộ Môn</h2> <br />
  <table className="table table-bordered border-primary">
    <thead>
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Tên Bộ Môn</th>
      </tr>
    </thead>
    <tbody>
    {props.subjects.map((item:any, index) => (
      <tr key={index}>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>
        <Link className='btn btn-primary' to={`${item.id}/edit`}>Edit</Link>
        <button className="btn btn-danger" onClick={() => props.onRemove(item.id)}>DELETE</button>
        </td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
<div>
<button type="button" className="btn btn-info"><a href='subject/add' className='text-dark'>Add new</a></button>
</div>
</div>
  )
}

export default ListSubject