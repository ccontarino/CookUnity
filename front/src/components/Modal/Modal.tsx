import React, { useState } from 'react';
import styles from './Modal.module.css';
import { RiCloseLine } from 'react-icons/ri';

const Modal = ({
  IsOpenState = false,
  setIsOpen,
  headerText = 'Confirm',
  bodyText = 'body Text',
  buttonRightText = 'Accept',
  buttonLeftText = 'button Left Text',
  setIsOpenState,
}) => {
  return (
    <>
      {IsOpenState && (
        <div className={styles.darkBG} onClick={() => setIsOpenState(false)}>
          <div className={styles.centered}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <h5 className={styles.heading}>{headerText}</h5>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpenState(false)}>
                <RiCloseLine style={{ marginBottom: '-3px' }} />
              </button>
              <div className={styles.modalContent}>
                {`Are you sure you want to ${bodyText} the item?`}
              </div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => setIsOpen(false)}>
                    {buttonRightText}
                  </button>
                  <button
                    className={styles.cancelBtn}
                    onClick={() => setIsOpen(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
