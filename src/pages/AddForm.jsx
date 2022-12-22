import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

const MyForm = () => {
  return (
    <Formik
      initialValues={{
        item: '',
        price: '',
        img: ''
      }}
      validate={values => {
        const errors = {};
        if (!values.item) {
          errors.item = 'Required';
        } else if (
          /^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/.test(values.item)
        ) {
          errors.item = 'Invalid item name';
        }
        if (!values.price) {
          errors.price = 'Required';
        } else if (
          /^[1-9]\d{0,7}(\.\d{1-4})$/.test(values.price)
        )
        if (!values.img) {
          errors.img = 'Required';
        } else if (
          /http(s?)(:\/\/)((www.)?)(([^.]+)\.)?([a-zA-z0-9\-_]+)(.com|.net|.gov|.org|.in)(\/[^\s]*)?/.test(values.img)
        )
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <FormGroup controlId="formBasicItem">
            <Field
              name="item"
              type="text"
              placeholder="Item Name"
              className={'form-control' + (errors.item && touched.item ? ' is-invalid' : '')}
            />
            <FormControl.Feedback type="invalid">{errors.item}</FormControl.Feedback>
          </FormGroup>

          <FormGroup controlId="formBasicPrice">
            <Field
              name="price"
              type="text"
              placeholder="Price"
              className={'form-control' + (errors.price && touched.price ? ' is-invalid' : '')}
            />
            <FormControl.Feedback type="invalid">{errors.price}</FormControl.Feedback>
          </FormGroup>

          <FormGroup controlId="formBasicImg">
            <Field
              name="img"
              type="text"
              placeholder="img"
              className={'form-control' + (errors.img && touched.img ? ' is-invalid' : '')}
            />
            <FormControl.Feedback type="invalid">{errors.img}</FormControl.Feedback>
          </FormGroup>

          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
