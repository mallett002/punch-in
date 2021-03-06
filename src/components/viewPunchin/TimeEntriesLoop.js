import React, { Component } from 'react';
import TimeEntry from './TimeEntry';


export class TimeEntriesLoop extends Component {
    render() {

    return this.props.timeEntries.map((entry) => (
            <TimeEntry 
                key={entry.id} 
                entryItem={entry} 
                color={this.props.color} 
                delTimeEntry={this.props.delTimeEntry}
                projID={this.props.projID}
            />
        ))
            
    }
}

export default TimeEntriesLoop

