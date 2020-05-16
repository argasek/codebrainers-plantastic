import React from "react";
import { Col, Row } from "reactstrap";
import PropTypes from 'prop-types';
import PlantFormCancelButton from 'components/plants/plant-form/buttons/PlantFormCancelButton';
import PlantFormSubmitButton from 'components/plants/plant-form/buttons/PlantFormSubmitButton';
import PlantFormResetButton from 'components/plants/plant-form/buttons/PlantFormResetButton';

/**
 * @component
 */
const PlantFormButtons = ({ cancelLabel, resetLabel, submitDisabled, submitLabel }) => {
  return (
    <React.Fragment>
      <hr className="mb-4 mt-4" />
      <Row form className="mb-2">
        <Col xs={ 6 }>
          <PlantFormCancelButton label={ cancelLabel } />
        </Col>
        <Col xs={ 6 } className="mb-0 d-flex flex-row-reverse">
          <PlantFormSubmitButton disabled={ submitDisabled } label={ submitLabel } />
          <PlantFormResetButton label={ resetLabel } />
        </Col>
      </Row>
    </React.Fragment>
  );
};

PlantFormButtons.propTypes = {
  cancelLabel: PropTypes.string.isRequired,
  resetLabel: PropTypes.string.isRequired,
  submitLabel: PropTypes.string.isRequired,
  submitDisabled: PropTypes.bool.isRequired,
};

export default React.memo(PlantFormButtons);
