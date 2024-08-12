import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Accordian() {
    return (
        <div className='h-[40vh] flex flex-col justify-evenly'>
            <Accordion
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none'
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent' }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ color: '#1b2048', fontWeight: 'semibold', borderBottom: '1px solid #000000', fontSize: '25px' }}
                >
                    Proven track record
                </AccordionSummary>
                <AccordionDetails sx={{ color: '#333', backgroundColor: 'transparent' }}>
                    Our successful case outcomes and satisfied clients speak
                    volumes about our dedication to excellence.
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none'
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent' }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ color: '#1b2048', fontWeight: 'semibold', borderBottom: '1px solid #000000', fontSize: '25px' }}
                >
                    Personalized approach
                </AccordionSummary>
                <AccordionDetails sx={{ color: '#333', backgroundColor: 'transparent' }}>
                    We understand that every client is unqiue, and we tailor our approach
                    to meet individual needs.
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none'
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent' }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ color: '#1b2048', fontWeight: 'semibold', borderBottom: '1px solid #000000', fontSize: '25px' }}
                >
                    Accessible and Responsive
                </AccordionSummary>
                <AccordionDetails sx={{ color: '#333', backgroundColor: 'transparent' }}>
                    Communication is key. Our team is readily available to address your concerns and provide
                    update on your case.
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
