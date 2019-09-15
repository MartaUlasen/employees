import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';

const FieldExperienceRender = function(params) {
    const formatedDate = format(params.value.toDate(), 'yyyy, MM, dd');
    return <span>{formatDistanceToNow(new Date(formatedDate))}</span>;
};

export default FieldExperienceRender;
