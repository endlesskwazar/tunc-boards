import React from 'react';
import { Card } from '../card';

function Board({ title }) {
    return (
        <div className="bg-white p-2 rounded-md w-64">
            <h4>{ title }</h4>
            <Card />
        </div>
    );
}

export default Board;