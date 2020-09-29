import React from 'react';

function ProjectItem(props) {

    const { project } = props;

    return (
        <li>{project.title}</li>
    )

}

export default ProjectItem;