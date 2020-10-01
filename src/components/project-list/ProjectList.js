import React from 'react';
import { ProjectItem } from '../project-item';

function ProjectList() {
    const projects = [
        {key: 1, title: "project1"},
        {key: 2, title: "project2"},
        {key: 3, title: "project3"},
    ]
    const items = projects.map(item => <ProjectItem project={item} key={item.key} />);

    return (
        <ul>
            {items}
        </ul>
    )
}

export default ProjectList;