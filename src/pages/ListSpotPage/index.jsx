/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { Formik } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { listNewSpot } from '../../api';
import { storage } from '../../firebaseConfig';

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required()
});

function ListSpotPage() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  // const [urls, setUrls] = useState([]);

  const onImageChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const handleUploads = async (values) => {
    const promises = [];
    images.forEach(async (image) => {
      const storageRef = ref(storage, `/images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      promises.push(uploadTask);
      // const uploadTask = storage.ref(`images/${image.name}`).put(image);
      // promises.push(uploadTask);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log(progress);
        },
        (error) => {
          console.log(error);
        }
      );

      const url = await getDownloadURL(uploadTask.snapshot.ref);
      values.images.push(url);
    });

    Promise.all(promises).then(() => {
      listNewSpot(values)
        .then((res) => {
          console.log(res);
          alert('Successfully added a Spot');
          navigate('/');
          setImages([]);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handleFormSubmit = (values) => {
    handleUploads(values);
    console.log(values);
  };

  return (
    <Row className="p-5">
      <Col>
        <Formik
          initialValues={{ title: '', description: '', price: '', images: [] }}
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
              <Form.Group>
                <Form.Label>Add Images</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  accept="image/*"
                  id="image"
                  multiple
                  onChange={onImageChange}
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
