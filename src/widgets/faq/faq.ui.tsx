import * as Accordion from '@radix-ui/react-accordion';
import './faq.scss';
import { FAQ_DATA } from '~@/shared/constant/faq';

export function Faq() {
    return (
        <section className='faq container' id='faq'>
            <div className='faq__wrapper'>
                <h1 className='faq__title'>
                    <span>Популярные вопросы</span>, которыми часто задаются наши клиенты
                </h1>
                <Accordion.Root type='single' className='faq__questions' collapsible>
                    {FAQ_DATA.map(faq => (
                        <Accordion.Item value={faq.q} className='faq__question'>
                            <Accordion.Header>
                                <Accordion.Trigger className='faq__question-header'>
                                    <p className='faq__question-name'>{faq.q}</p>
                                    <svg
                                        width='30'
                                        height='30'
                                        viewBox='0 0 30 30'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='faq__question-icon'
                                    >
                                        <path
                                            d='M15 2.8125C12.5895 2.8125 10.2332 3.52728 8.22899 4.86646C6.22477 6.20564 4.66267 8.10907 3.74022 10.336C2.81778 12.563 2.57643 15.0135 3.04668 17.3777C3.51694 19.7418 4.67769 21.9134 6.38214 23.6179C8.08659 25.3223 10.2582 26.4831 12.6223 26.9533C14.9865 27.4236 17.437 27.1822 19.664 26.2598C21.8909 25.3373 23.7944 23.7752 25.1335 21.771C26.4727 19.7668 27.1875 17.4105 27.1875 15C27.1835 11.7689 25.8981 8.67131 23.6134 6.38659C21.3287 4.10186 18.2311 2.81653 15 2.8125ZM19.6875 15.9375H15.9375V19.6875C15.9375 19.9361 15.8387 20.1746 15.6629 20.3504C15.4871 20.5262 15.2486 20.625 15 20.625C14.7514 20.625 14.5129 20.5262 14.3371 20.3504C14.1613 20.1746 14.0625 19.9361 14.0625 19.6875V15.9375H10.3125C10.0639 15.9375 9.82541 15.8387 9.64959 15.6629C9.47378 15.4871 9.375 15.2486 9.375 15C9.375 14.7514 9.47378 14.5129 9.64959 14.3371C9.82541 14.1613 10.0639 14.0625 10.3125 14.0625H14.0625V10.3125C14.0625 10.0639 14.1613 9.8254 14.3371 9.64959C14.5129 9.47377 14.7514 9.375 15 9.375C15.2486 9.375 15.4871 9.47377 15.6629 9.64959C15.8387 9.8254 15.9375 10.0639 15.9375 10.3125V14.0625H19.6875C19.9361 14.0625 20.1746 14.1613 20.3504 14.3371C20.5262 14.5129 20.625 14.7514 20.625 15C20.625 15.2486 20.5262 15.4871 20.3504 15.6629C20.1746 15.8387 19.9361 15.9375 19.6875 15.9375Z'
                                            fill='#FF3D00'
                                            className='faq__question-cross'
                                        />
                                    </svg>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className='faq__question-body'>
                                <div className='faq__question-answers'>
                                    <p className='faq__question-answer'>{faq.a.up}</p>
                                    <p className='faq__question-answer hide-mobile'>{faq.a.down}</p>
                                    <p className='faq__question-answer mobile'>{faq.a.down}</p>
                                </div>
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>
        </section>
    );
}
