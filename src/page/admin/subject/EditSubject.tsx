import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { readSubject } from '../../../API/subject';
import { TypeSubject } from '../../../Type/TypeSubject';

type UpdateSubjectProps = {
  onUpdateSubject: (subject: TypeSubject) => void
}
type FormInputs = {
  id?: any,
  name: string,
  description: string
}
const Editsubject = (props: UpdateSubjectProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getSubject = async () => {
      const { data } = await readSubject(id);
      reset(data);
    }
    getSubject();
  }, [])
  const onSubmit: SubmitHandler<FormInputs> = data => {
    props.onUpdateSubject(data);
    navigate("/subject");
  }
  return (
    <div>
      <Form action='' onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '1200px', margin: 'auto' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h4>Cập Nhật</h4></Form.Label>
          <Form.Group>
            <Form.Label>Nhập Tên</Form.Label>
            <Form.Control type="text" {...register('name', { required: true })} />
          </Form.Group>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Editsubject