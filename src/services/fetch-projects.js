export const fetchProjects = async () => {
    // would typically call await fetch(someUrl) to get the projects and return them.
    // But for now, we'll fake it
    return [{
        id: 'afd7e596-18df-418b-8c30-24c958f22381',
        title: `Redesign the Hub's homepage`,
        payRate: 50,
        color: '#f00000',
        punchIns: 2,
        totalTime: '5:33',
        totalPay: 339.76,
        notes: `Project 1 notes`,
        timeEntries: [
            { id: '26862dbb-186b-464d-9aad-bf4592537c96',
              date: '1/1/2020',
              timeStart: '8:35',
              timeEnd: '9:35',
              timeEntryTotal: '1:00:00',
              timeEntryPay: 50
            },
            { id: '65167017-EEC6-41C5-9E28-8C11D7DB4785',
            date: '1/2/2020',
            timeStart: '9:35',
            timeEnd: '11:35',
            timeEntryTotal: '2:00:00',
            timeEntryPay: 100
            }
          ]
      },
      
      {
        id: 'CC16B7A0-3B1B-47C3-9749-00F4A9F12EF0',
        title: `Feed Venus`,
        payRate: 50,
        color: '#000',
        punchIns: 2,
        totalTime: '5:33',
        totalPay: 339.76,
        notes: 'Project 2 notes',
        timeEntries: [
            { id: 'A9E9E1B2-0DEE-448A-BAA5-087B37AEFA3E',
              date: '1/12/2021',
              timeStart: '8:35',
              timeEnd: '9:35',
              timeEntryTotal: '1:00:00',
              timeEntryPay: 50
            },
            { id: '55ED74EA-9940-451E-BAF0-8631DEC44651',
            date: '1/22/2021',
            timeStart: '9:35',
            timeEnd: '11:35',
            timeEntryTotal: '2:00:00',
            timeEntryPay: 100
            }
        ]
      }];
};