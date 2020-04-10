import React from 'react';
import { MDBCol, MDBModal, MDBModalHeader, MDBModalBody } from 'mdbreact'
import { BallBeat } from 'react-pure-loaders';

export default function admitModalContent(props) {

  return (<MDBCol>
    <MDBModal isOpen={props.processing} size="sm" centered={true} disableBackdrop={true}>
      <MDBModalHeader className="align-self-center">{!props.processed ? props.initText : props.finishText}</MDBModalHeader>
      <MDBModalBody className="align-self-center">
        {!props.processed ? <BallBeat
          style={{ alignSelf: 'center' }}
          color={'#123abc'}
          loading={true}
        /> : <i className='fa fa-check text-success fa-2x'></i>}
      </MDBModalBody>
    </MDBModal>
  </MDBCol>);
}
