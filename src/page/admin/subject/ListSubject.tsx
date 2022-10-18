import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TypeSubject } from '../../../Type/TypeSubject';


type ListSubject = {
  subjects: TypeSubject[],
  onRemove: (id:any) => void
}
function ListSubject(props: ListSubject) {
  return (
    <div>
      <NavLink to='add'><button className=''>Add</button></NavLink>
      <table >
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {props.subjects?.map((item: any, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
              <Link to={`/subject/${item.id}/edit`}><button >Sửa</button></Link>
                <button style={{ marginLeft: '10px' }} onClick={() => props.onRemove(item.id)} >Xóa</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
export default ListSubject