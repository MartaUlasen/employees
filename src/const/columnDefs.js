import FieldMariedRender from 'components/employeesList/fieldMariedRender';
import FieldBirthdayRender from 'components/employeesList/fieldBirthdayRender';
import FieldSalaryRender from 'components/employeesList/fieldSalaryRender';
import FieldExperienceRender from 'components/employeesList/fieldExperienceRender';
import FieldToolsRender from 'components/employeesList/fieldToolsRender';

const columnDefs = [
    {
        headerName: "Name", field: "name", sortable: true, filter: true, resizable: true,
    },
    {
        headerName: "Surname", field: "surname", sortable: true, filter: true,
    },
    {
        headerName: "Profession", field: "profession", sortable: true, filter: true,
    },
    {
        headerName: "Experience", field: "dateOfEmployment", cellRendererFramework: FieldExperienceRender, sortable: true, filter: true, resizable: true,
    },
    {
        headerName: "Salary", field: "salary", cellRendererFramework: FieldSalaryRender, sortable: true, filter: true, resizable: true,
    },
    {
        headerName: "Birthday", field: "birthday", cellRendererFramework: FieldBirthdayRender, sortable: true, filter: true, resizable: true,
    },
    {
        headerName: "Maried", field: "maried", cellRendererFramework: FieldMariedRender, sortable: true, filter: true, resizable: true,
    },
    {
        headerName: "", cellRendererFramework: FieldToolsRender, resizable: true,
    }
];

export default columnDefs;