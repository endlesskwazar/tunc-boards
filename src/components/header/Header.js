import React from 'react';
import { ProjectMenu } from '../project-menu';

import { ReactComponent as PlayIcon} from '../../play-button.svg';

function Header() {
    return (
        <header className="bg-white h-16 shadow-xl">
            <ProjectMenu pageWrapId={"page-wrap"} outerContainerId={"root"} />

            <div id="page-wrap" className="h-full">
                <div className="h-full flex justify-center items-center">
                   <div className="flex justify-center items-center">
                       <div><PlayIcon className="w-8"/></div>
                       <div className="ml-6">
                           <div>No task selected for timer</div>
                           <div></div>
                       </div>
                   </div>
                </div>
            </div>

        </header>
    );
}

export default Header;