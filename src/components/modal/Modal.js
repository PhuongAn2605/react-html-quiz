import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'antd';
import "antd/dist/antd.css";

import { hideModal } from '../../redux/modal/modal.actions';

import './Modal.css';
import { submitUserAnswersStart } from '../../redux/user-answers/user-answers.actions';

const ConfirmModal = ({ history }) => {
  const { showModal } = useSelector(state => state.showModal);
  const { attempt_id } = useSelector(state => state.attempt);
  const { user_answers } = useSelector(state => state.userAnswers)

  // console.log(attempt_id);
  // const payload = {
  //   attempt_id,
  //   user_answers
  // }

  const dispatch = useDispatch();
  // console.log(showModal);
  const [isModalVisible, setIsModalVisible] = useState(showModal);


  useEffect(() => {
    setIsModalVisible(showModal);
  }, [showModal])
  // console.log(showModal);

  // console.log(isModalVisible);

  //   const showModal = () => {
  //     setIsModalVisible(true);
  //   };

  const handleOk = async () => {
    await setIsModalVisible(false);
    await dispatch(hideModal());



    await dispatch(submitUserAnswersStart(attempt_id, user_answers));

    // console.log('yeah');
    history.push('/review');
    // window.location.assign('/review');
    // window.location.repalce('/review');

    // console.log(window.location);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    dispatch(hideModal());

  };

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal title="Are you sure want to finish the quiz?" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Choose OK to finish or Cancel to continue the quiz!</p>
      </Modal>
    </>
  );
};

export default ConfirmModal;