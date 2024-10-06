import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQAccordion = () => {
    return (
        <div className="flex flex-col justify-evenly p-20">
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
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white', backgroundColor: 'transparent' }} />}
                    aria-controls="faq1-content"
                    id="faq1-header"
                    sx={{
                        color: 'white',
                        fontWeight: 'semibold',
                        borderBottom: '1px solid white',
                        fontSize: '25px',
                    }}
                >
                    What areas of law do you specialize in?
                </AccordionSummary>
                <AccordionDetails sx={{ color: 'white', backgroundColor: 'transparent' }}>
                    Our firm specializes in corporate law, mergers and acquisitions, environmental law,
                    civil litigation, and more. We provide comprehensive legal services to businesses
                    across various industries.
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
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white', backgroundColor: 'transparent' }} />}
                    aria-controls="faq2-content"
                    id="faq2-header"
                    sx={{
                        color: 'white',
                        fontWeight: 'semibold',
                        borderBottom: '1px solid white',
                        fontSize: '25px',
                    }}
                >
                    How do you approach client communication?
                </AccordionSummary>
                <AccordionDetails sx={{ color: 'white', backgroundColor: 'transparent' }}>
                    We prioritize transparent communication, keeping our clients informed at every stage
                    of their legal process. Our team is always accessible and responsive to address any
                    concerns or questions.
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
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white', backgroundColor: 'transparent' }} />}
                    aria-controls="faq3-content"
                    id="faq3-header"
                    sx={{
                        color: 'white',
                        fontWeight: 'semibold',
                        borderBottom: '1px solid white',
                        fontSize: '25px',
                    }}
                >
                    What is your experience with high-profile cases?
                </AccordionSummary>
                <AccordionDetails sx={{ color: 'white', backgroundColor: 'transparent' }}>
                    Our firm has a proven track record of successfully handling high-profile and complex
                    cases, including corporate mergers, environmental litigation, and civil claims involving
                    significant financial stakes.
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
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white', backgroundColor: 'transparent' }} />}
                    aria-controls="faq4-content"
                    id="faq4-header"
                    sx={{
                        color: 'white',
                        fontWeight: 'semibold',
                        borderBottom: '1px solid white',
                        fontSize: '25px',
                    }}
                >
                    Do you handle cases outside of South Africa?
                </AccordionSummary>
                <AccordionDetails sx={{ color: 'white', backgroundColor: 'transparent' }}>
                    While our primary focus is on cases within South Africa, we are well-equipped to manage
                    legal matters that involve international elements or require cross-border legal expertise,
                    especially within the broader African continent.
                </AccordionDetails>
            </Accordion>

        </div >
    );
}

export default FAQAccordion;
