import './consultation.scss'

export function Consultation() {
    return (
        <section className="consultation">
            <div className="consultation__wrapper container">
                <div className="consultation__texts">
                    <p className="consultation__text">
                        Если вы <span>заинтересованы</span>, нашим
                        производством,
                        <br />
                        но остались важные вопросы — <br />
                        <span>просто оставляйте контакты для связи</span>
                    </p>
                    <p className="consultation__text mobile">
                        Если вы <span>заинтересованы</span>,<br />
                        нашим производством,
                        <br />
                        но остались важные вопросы — <br />
                        <span>
                            просто оставляйте контакты <br />и получайте ответы
                            на запросы
                        </span>
                    </p>
                    <button className="consultation__button">
                        Бесплатная консультация
                    </button>
                    <p className="consultation__disclaimer">
                        подробная презентация предоставляется исключительно на
                        основании запроса
                    </p>
                </div>
                <img
                    src="/static/images/consultation/tele_2.png"
                    alt=""
                    className="consultation__img"
                />
            </div>
        </section>
    );
}
