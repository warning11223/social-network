import React from 'react';

import styles from './Messages.module.css'
import Dialog from "../dialog/Dialog";
import Message from "../message/Message";
import { connect } from "react-redux";
import {changeDialog, changeDialogTextarea} from "../../redux/actions";
import { Navigate } from 'react-router-dom'
import {ErrorMessage, Form, Formik} from "formik";
import * as Yup from "yup";
import {RedirectComponent} from "../../hoc/RedirectComponent";

const Messages = ({dialogsData, messagesData, value, onTextareaChange, onSend, isAuth}) => {


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {
                    dialogsData.map(item => <Dialog key={item.id} id={item.id} name={item.name} /*active*//>)
                }
            </div>
            <div className={styles.messages}>
                {
                    messagesData.map(item => <Message key={item.id} text={item.text}/>)
                }
                <AddMessageForm value={value} onTextareaChange={onTextareaChange} onSend={onSend}/>
            </div>
        </div>
    );
};

const validateMessageForm = values => {
    const errors = {};
    if(!values.message) {
        errors.message = 'Required entry fill'
    }
    return errors;
}

const validationSchemaLoginForm = Yup.object().shape( {

    message: Yup.string()
        .min( 2, "Must be longer than 2 characters" )
        .max( 5, "Must be shorter than 5 characters" )
        .required( "Required 2" )
} );


const AddMessageForm = ({value, onTextareaChange, onSend}) => {
    return (
        <Formik
            initialValues={{
                message: '',
            }}
           validationSchema={validationSchemaLoginForm}
        >
            { () => (
                <>
                    <div>
            <textarea
                cols="30"
                rows="7"
                placeholder='Enter your message...'
                value={value}
                onChange={onTextareaChange}
                name='message'
            ></textarea>
                    </div>
                    <ErrorMessage name="message" component="div" />
                    <div>
                        <button onClick={(e) => onSend(e, value)}>Send</button>
                    </div>
                </>
            )}
        </Formik>
    )
}

const RedirectHOC = RedirectComponent(Messages);

const mapStateToProps = (state) => {
    return {
        messagesData: state.messagesReducer.messagesData,
        dialogsData: state.messagesReducer.dialogsData,
        value: state.messagesReducer.value,
        isAuth: state.authReducer.isAuth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTextareaChange: e => (dispatch(changeDialogTextarea(e.target.value))),
        onSend: (e, value) => (dispatch(changeDialog(value))),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedirectHOC);
