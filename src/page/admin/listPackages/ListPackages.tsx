import React from 'react'
import { Link } from 'react-router-dom';
import { PackagesType } from '../../../Type/Packages';

type PackagesRemove = {
    packagess : PackagesType[];
    onRemovePack : (id:number) => void
}

const ListPackages = (props: PackagesRemove) => {
  return (
    <div>
        <div className="bg-white">
      <h2 className=" text-xl uppercase pt-4">Danh sách gói tập</h2> <br />
  <table className="table table-bordered border-primary">
    <thead>
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Tên gói tập</th>
        <th scope="col"> Bộ môn</th>
        <th scope="col">Thể loại</th>
        <th scope="col">Giá niêm yết</th>
        <th scope="col">Giá Sale</th>
        <th scope="col">Hành động</th>
        <th scope="col">Chức năng</th>
      </tr>
    </thead>
    <tbody>
    {props.packagess.map((item:any, index) => (
      <tr key={index}>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.subject}</td>
        <td>{item.category}</td>
        <td>{item.price}</td>
        <td>{item.price_sale}</td>
        <td>{item.act}</td>
        <td>
        <Link className='btn btn-primary' to={`${item.id}/edit`}>Edit</Link>
        <button className="btn btn-danger" onClick={() => props.onRemovePack(item.id)}>DELETE</button>
        </td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
<div>
<button type="button" className="btn btn-info"><a href='packagess/add' className='text-dark'>Add new</a></button>
</div>
</div>
  )
}

export default ListPackages