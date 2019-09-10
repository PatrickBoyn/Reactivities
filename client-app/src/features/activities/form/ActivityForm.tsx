import React from 'react';
import { Segment, Form } from 'semantic-ui-react';

const ActivityForm = () => {
  return (
    <Segment>
      <Form>
        <Form.Input placeholder='title' />
        <Form.Input placeholder='description' />
        <Form.Input placeholder='Category' />
        <Form.Input placeholder='Date' />
        <Form.Input placeholder='City' />
        <Form.Input placeholder='Venue' />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
