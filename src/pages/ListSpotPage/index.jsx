import { Formik } from 'formik';
import * as yup from 'yup';
import React, { useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { listNewSpot } from '../../api';

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required()
});

function ListSpotPage() {
  const handleFormSubmit = useCallback((values) => {
    listNewSpot(values)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Row className="p-5">
      <Col>
        <Formik
          initialValues={{ title: '', description: '', price: '' }}
          validationSchema={schema}
          onSubmit={handleFormSubmit}>
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Spot Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter spot name"
                  value={values.title}
                  onChange={handleChange}
                  isInvalid={errors.title}
                />
                <Form.Text className="text-muted">
                  Pick a name that best describes your spot
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  value={values.description}
                  onChange={handleChange}
                  isInvalid={errors.description}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>How much will you charge for the spot</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Price"
                  value={values.price}
                  onChange={handleChange}
                  isInvalid={errors.price}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                List my spot
              </Button>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
}

export default ListSpotPage;