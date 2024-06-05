import React, { useState } from 'react'
import shape from '../../assets/bg-shape.png'
import shapeOne from '../../assets/bg-shape2.png'
import faq from '../../assets/faq.png'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
const Asked = () => {
    const [accordion, setAccordion] = useState(false)
    const [accordionOne, setAccordionOne] = useState(false)
    const [accordionTwo, setAccordionTwo] = useState(false)
    const [accordionThree, setAccordionThree] = useState(false)
    const [accordionFour, setAccordionFour] = useState(false)

    const handleAccordion = () => {
        setAccordion(!accordion)
    }
    const handleAccordionOne = () => {
        setAccordionOne(!accordionOne)
    }
    const handleAccordionTwo = () => {
        setAccordionTwo(!accordionTwo)
    }
    const handleAccordionThree = () => {
        setAccordionThree(!accordionThree)
    }
    const handleAccordionFour = () => {
        setAccordionFour(!accordionFour)
    }
    return (
        <div>
            <section className='py-24 bg-navbar relative'>
                <img className='absolute top-0 w-full' src={shapeOne} alt="shape" />
                <img className='absolute bottom-0 w-full' src={shape} alt="shape" />
                <div className="max-w-container mx-auto">
                    <div className="text-center px-6 md:px-6">
                        <h2 className='font-roboto font-bold text-textprimary md:text-4xl text-3xl'>Asked Questions</h2>
                        <p className="font-roboto font-light text-textprimary text-base md:w-[61%] mt-6 mx-auto">Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>
                    </div>
                    <div className="md:flex justify-between gap-x-8 mt-[50px]">
                        <div className="md:w-2/4">
                            <Accordion className="border-none">
                                <AccordionItem>
                                    <div className="relative rounded-xl shadow-xl after:conter-[''] after:absolute after:top-0 after:left-0 after:w-2 after:h-full after:bg-get">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <span className='font-roboto font-bold text-textprimary text-xl'>How can I order my favrourate product ?</span>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className={`font-roboto font-light text-textprimary text-base`}>
                                                Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood.
                                            </p>
                                        </AccordionItemPanel>
                                    </div>
                                </AccordionItem>
                                <AccordionItem>
                                <div className="relative mt-[20px] rounded-xl shadow-xl after:conter-[''] after:absolute after:top-0 after:left-0 after:w-2 after:h-full after:bg-get">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <span className='font-roboto font-bold text-textprimary text-xl'>How can I complete order with payment ?</span>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className={`font-roboto font-light text-textprimary text-base`}>
                                                Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood.
                                            </p>
                                        </AccordionItemPanel>
                                    </div>
                                </AccordionItem>
                                <AccordionItem>
                                <div className="relative mt-[20px] rounded-xl shadow-xl after:conter-[''] after:absolute after:top-0 after:left-0 after:w-2 after:h-full after:bg-get">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <span className='font-roboto font-bold text-textprimary text-xl'>Which payments options are available ?</span>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className={`font-roboto font-light text-textprimary text-base`}>
                                                Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood.
                                            </p>
                                        </AccordionItemPanel>
                                    </div>
                                </AccordionItem>
                                <AccordionItem>
                                <div className="relative mt-[20px] rounded-xl shadow-xl after:conter-[''] after:absolute after:top-0 after:left-0 after:w-2 after:h-full after:bg-get">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <span className='font-roboto font-bold text-textprimary text-xl'>How can I get refund for return products ?</span>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className={`font-roboto font-light text-textprimary text-base`}>
                                                Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood.
                                            </p>
                                        </AccordionItemPanel>
                                    </div>
                                </AccordionItem>
                                <AccordionItem>
                                <div className="relative mt-[20px] rounded-xl shadow-xl after:conter-[''] after:absolute after:top-0 after:left-0 after:w-2 after:h-full after:bg-get">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <span className='font-roboto font-bold text-textprimary text-xl'>How can I be confident of the quality ?</span>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className={`font-roboto font-light text-textprimary text-base`}>
                                                Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood.
                                            </p>
                                        </AccordionItemPanel>
                                    </div>
                                </AccordionItem>

                            </Accordion>
                        </div>
                        <div className="md:w-2/4 md:mt-0 mt-12 flex items-center justify-center">
                            <div className="">
                                <img className="animate-watch-pulse" src={faq} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Asked



