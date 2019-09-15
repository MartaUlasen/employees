import { notification } from 'components/notification';

export const createEmployee = (employee) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;

        firestore.collection('employees').add({
            ...employee,
            name: employee.name,
            surname: employee.surname,
            birthday: employee.birthday,
            createdBy: profile.name + ' ' + profile.surname,
        })
            .then(()=> {
                dispatch({
                    type: 'CREATE_EMPLOYEE',
                    employee,
                })
            })
            .catch((error) => {
                dispatch( {type: 'CREATE_EMPLOYEE_ERROR', error})
            });
    }
}

export const updateEmployee = (employee, id) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;

        firestore.collection('employees').doc(id).update({
            ...employee,
            name: employee.name,
            surname: employee.surname,
            birthday: employee.birthday,
            createdBy: profile.name + ' ' + profile.surname,
        })
            .then(()=> {
                dispatch({
                    type: 'UPDATE_EMPLOYEE',
                    employee,
                });
        })
            .catch((error) => {
                dispatch( {type: 'UPDATE_EMPLOYEE_ERROR', error});
            });
        
    }
}

export const removeEmployee = (id) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('employees').doc(id).delete()
            .then(()=> {
                dispatch({
                    type: 'DELETE_EMPLOYEE',
                });
                notification.success('This employee was deleted');
            })
            .catch((error) => {
                dispatch( {type: 'DELETE_EMPLOYEE_ERROR', error});
                notification.error('This employee was not deleted');
            });
    }
}
