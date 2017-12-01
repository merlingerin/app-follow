import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { AppCard } from '../components.index';

const AppsModal = (props) => (
    <Modal trigger={props.trigger}>
        <Modal.Header>{props.modalTitle}</Modal.Header>
        <Modal.Content className={props.classContainer}>
            {
                props.items.map( (item, idx) => (
                    <AppCard key={idx} { ...item } cardWidth={'w-20'} showPrice={true} />
                ))
            }
        </Modal.Content>
    </Modal>
);

export default AppsModal;