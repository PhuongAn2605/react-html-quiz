import React, { useState } from 'react';
import Question from '../question/Question';
import Button from '../button/Button';
import ConfirmModal from '../modal/Modal';
import { showModal } from '../../redux/modal/modal.actions';

const AttemptSection = ({ history }) => {

    return (
        <section>
            <Question title='Submit your answer' button_id='green-btn' action={showModal()}/>
            {/* <div className='form'>
                <Button title='Submit your answer' button_id='green-btn' action={showModal()} />
            </div>
            <ConfirmModal /> */}
                <ConfirmModal history={history} />

        </section>
    )
}

export default AttemptSection;