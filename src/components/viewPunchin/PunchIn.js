import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeEntriesLoop from './TimeEntriesLoop';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import IconButton from '@material-ui/core/IconButton';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';


import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';



export class PunchIn extends Component {

    state = {
        project: {
                timeEntries: [{
                    id: uuidv4(),
                    date: '1/1/2020',
                    timeStart: '8:35',
                    timeEnd: '9:35',
                    timeEntryTotal: '1:00:00',
                    timeEntryPay: 50
                },
                {
                    id: uuidv4(),
                    date: '1/2/2020',
                    timeStart: '9:35',
                    timeEnd: '11:35',
                    timeEntryTotal: '2:00:00',
                    timeEntryPay: 100
                },
                {
                    id: uuidv4(),
                    date: '1/3/2020',
                    timeStart: '8:35',
                    timeEnd: '11:35',
                    timeEntryTotal: '3:00:00',
                    timeEntryPay: 150
                }
            ],
            notes: 'My notes'
        }
      }


    render() {
        const {title, color, payRate, punchIns, totalTime, totalPay} = this.props.projectItem;
        

        return (
          

            <div className='projectContain-PunchIn-Edit'>
                <div className='projectTopBar'>
                    <Tooltip TransitionComponent={Zoom} title="Back to Projects" arrow>
                        <div>
                            <Link to='/' className='linkColors'>
                                    <HomeOutlinedIcon className='eyeball'/>
                            </Link>
                        </div>
                    </Tooltip>
                     <p className='punchInStyle'>PUNCH-ins | <span style={{color: color}}>{punchIns}</span></p>
                     <Tooltip TransitionComponent={Zoom} title="Delete Project" arrow>
                        <div className='closeIconRight'>
                            <IconButton onClick={this.delProjForItem}>
                                <DeleteOutlineOutlinedIcon className='closeIcon'/>
                            </IconButton>
                        </div>
                    </Tooltip>
               </div>
               <div className='titleBar' style={{backgroundColor: color}}>
                   <h2 className='titleText'>{title}</h2>
                   <p className='projectsPayRate'>${payRate} / hour</p>
               </div>

            <TimeEntriesLoop timeEntries={this.state.project.timeEntries} color={color}/>


            <div className='totalsBox' style={{border: `1px solid ${color}`}}>
                <div className='IconCont-TotalsBox' style={{backgroundColor: color}}>
                    <QueryBuilderOutlinedIcon style={{fontSize: '4rem', color: '#fff'}}/>
                </div>
                <p className='totalsBoxTxt'>TOTAL TIME | 06:36</p>
            </div>

            <div className='totalsBox' style={{border: `1px solid ${color}`}}>
                <div className='IconCont-TotalsBox' style={{backgroundColor: color}}>
                    <AttachMoneyOutlinedIcon style={{fontSize: '4rem', color: '#fff'}}/>
                </div>
                <p className='totalsBoxTxt'>TOTAL PAY | $500.00</p>
            </div>

            </div>
        )
    }
}


PunchIn.propTypes = {
    projectItem: PropTypes.object.isRequired
}

export default PunchIn