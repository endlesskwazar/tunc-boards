import React from 'react';
import { slide as Menu } from "react-burger-menu";
import './ProjectMenu.css';
import { ProjectList } from '../project-list';

function ProjectMenu(props) {
    return (
        <Menu {...props}>
            <ProjectList />
        </Menu>
    );
}

export default ProjectMenu;