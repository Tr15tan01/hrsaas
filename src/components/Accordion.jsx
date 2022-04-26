import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const accordionData = [{
        id: 1,
        title: ' What is HRSaas',
        subtitle: 'It is a Platform..',
        content: 'HRSaaS is a platform, where everyone can add his company\'s staff to monitor'
    }, {
        id: 2,
        title: 'Why use HRSaaS',
        subtitle: 'It is very useful. Application allows to monitor every change and progress',
        content: 'and very platform that eveyone needs to access to and this is good need to add some text here'
    }, {
        id: 3,
        title: 'Users',
        subtitle: 'users are always welcome',
        content: 'You can see users when you sign up or sign in into the application'
    }, {
        id: 4,
        title: 'How to use the platform',
        subtitle: 'Complete instruction of the application can be seen on instructions page',
        content: 'Go to instruction page'
    }]

    return (
        <div>
            {accordionData.map(item => {
                return (<Accordion key={item.id} expanded={expanded === item.id} onChange={handleChange(item.id)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {item.title}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>{item.subtitle}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {item.content}
                        </Typography>
                    </AccordionDetails>
                </Accordion>)
            })}

        </div>
    );
}
