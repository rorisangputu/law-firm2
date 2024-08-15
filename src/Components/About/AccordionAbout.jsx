import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionAbout = () => {
    return (
        <div className="flex flex-col justify-evenly">
            <Accordion
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none',
                    },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent' }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        color: '#000000',
                        fontWeight: 'semibold',
                        borderBottom: '1px solid #000000',
                        fontSize: '25px',
                    }}
                >
                    Integrity and Ethics
                </AccordionSummary>
                <AccordionDetails sx={{ color: '#333', backgroundColor: 'transparent' }}>
                    We uphold the highest ethical standards in all our actions, ensuring that every
                    decision and recommendation is made with honesty and integrity.
                </AccordionDetails>
            </Accordion>

            <Accordion
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none',
                    },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent' }} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{
                        color: '#000000',
                        fontWeight: 'semibold',
                        borderBottom: '1px solid #000000',
                        fontSize: '25px',
                    }}
                >
                    Client Advocacy
                </AccordionSummary>
                <AccordionDetails sx={{ color: '#333', backgroundColor: 'transparent' }}>
                    Our clients' interests are our top priority. We advocate fiercely on their behalf,
                    providing strong representation to achieve the best possible outcomes.
                </AccordionDetails>
            </Accordion>

            <Accordion
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none',
                    },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent' }} />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{
                        color: '#000000',
                        fontWeight: 'semibold',
                        borderBottom: '1px solid #000000',
                        fontSize: '25px',
                    }}
                >
                    Transparent Communication
                </AccordionSummary>
                <AccordionDetails sx={{ color: '#333', backgroundColor: 'transparent' }}>
                    We believe in clear and open communication. Our clients are kept informed at every
                    stage of the legal process, ensuring they understand their options and the progress
                    of their case.
                </AccordionDetails>
            </Accordion>

            <Accordion
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none',
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent' }} />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                    sx={{
                        color: '#000000',
                        fontWeight: 'semibold',
                        borderBottom: '1px solid #000000',
                        fontSize: '25px',
                    }}
                >
                    Continuous Improvement
                </AccordionSummary>
                <AccordionDetails sx={{ color: '#333', backgroundColor: 'transparent' }}>
                    We are committed to ongoing learning and development, ensuring our team stays at
                    the forefront of legal practices and innovations.
                </AccordionDetails>
            </Accordion>
        </div >
    );
}

export default AccordionAbout
