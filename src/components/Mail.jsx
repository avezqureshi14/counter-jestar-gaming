import React, { useState } from "react";
import { Modal } from "antd";

const Mail = () => {
  const [visible, setVisible] = useState(false);

  const handleContactClick = () => {
    setVisible(true);
  };

  const handleModalCancel = () => {
    setVisible(false);
  };

  const handleModalOk = () => {
    window.location.href = "mailto:avezqureshi4785@gmail.com";
  };

  return (
    <>
      <div onClick={handleContactClick} className="mail">
        <i className="bx bx-envelope"></i>
      </div>
      <Modal
        visible={visible}
        onCancel={handleModalCancel}
        onOk={handleModalOk}
        okText="Send Mail"
      >
        <p>You will be redirected to Mail</p>
      </Modal>

      <div onClick={handleContactClick} className="mail">
      <i className="bx bx-github"></i>
    </div>
    </>
  );
};

export default Mail;
