const initState = {
    employees: []
};

const employeeReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_EMPLOYEE':
            return state;
        case 'CREATE_EMPLOYEE_ERROR':
            return action.payload;
        case 'UPDATE_EMPLOYEE':
            return state;
        case 'UPDATE_EMPLOYEE_ERROR':
            return  action.payload;
        case 'DELETE_EMPLOYEE':
            return state;
        case 'DELETE_EMPLOYEE_ERROR':
            return  action.payload;
        default: 
            return state;
    }
}

export default employeeReducer;
