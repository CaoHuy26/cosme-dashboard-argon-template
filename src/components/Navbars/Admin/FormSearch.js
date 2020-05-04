import React from 'react';
import { Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

function FormSearch() {
  return (
    <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
      <FormGroup className="mb-0">
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fas fa-search" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Tìm kiếm" type="text" />
        </InputGroup>
      </FormGroup>
    </Form>
  );
}

export default FormSearch;