import React from "react";
import { format} from 'date-fns';

const FieldBirthdayRender = function(params) {
    return <span>{format(params.value.toDate(), 'dd.MM.yyyy')}</span>;
}
export default FieldBirthdayRender;