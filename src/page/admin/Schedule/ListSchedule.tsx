import React from 'react'
import { Link } from 'react-router-dom';
import { ScheduleType } from '../../../Type/ScheduleType';

type ScheduleRemove = {
    schedules : ScheduleType[];
    onRemoveSche : (id:number) => void
}

const ListSchedule = (props: ScheduleRemove) => {
  return (
    <div>
        <div className="bg-white">
      <h2 className=" text-xl uppercase pt-4">Danh sách ngày làm</h2> <br />
  <table className="table table-bordered border-primary">
    <thead>
      <tr>
        <th scope="col">STT</th>
        <th scope="col">PT</th>
        <th scope="col"> Hợp đồng</th>
        <th scope="col">Thời gian</th>
        <th scope="col">Ngày</th>
        <th scope="col">Trạng thái</th>
        <th scope="col">Chức năng</th>
      </tr>
    </thead>
    <tbody>
    {props.schedules.map((item:any, index) => (
      <tr key={index}>
        <th scope="row">{item.id}</th>
        <td>{item.pt_id}</td>
        <td>{item.contract_id}</td>
        <td>{item.time_id}</td>
        <td>{item.date}</td>
        <td>{item.status}</td>
        <td>
        <Link className='btn btn-primary' to={`${item.id}/edit`}>Edit</Link>
        <button className="btn btn-danger" onClick={() => props.onRemoveSche(item.id)}>DELETE</button>
        </td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
<div>
<button type="button" className="btn btn-info"><a href='schedules/add' className='text-dark'>Add new</a></button>
</div>
</div>
  )
}

export default ListSchedule