import React from 'react'
import { Form } from 'react-bootstrap'
import { useForm,SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
type AddSubjectProps = {
  onAddSubject: (subject: formInput) => void,
}
type formInput = {
  name: string,
  description: string
}
const Addsubject = (props: AddSubjectProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<formInput>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<formInput> = (data: any) => {
    props.onAddSubject(data)
    navigate("/subject");
  }
  return (
    <Form action='' onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '1200px', margin: 'auto' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h4>Thêm Mới</h4></Form.Label>
        <Form.Group>
          <Form.Label>Nhập Tên</Form.Label>
          <Form.Control type="text" {...register('name', { required: true })} />
          {errors.name && errors.name.type === "required" && <span className="validate">Tên danh mục không được để trốnggggg</span>}
          <br />
        </Form.Group>
      </Form.Group>
      <button type="submit">
        Submit
      </button>
    </Form>
  )
}

export default Addsubject