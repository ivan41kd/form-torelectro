import './information.scss'

export function Information() {
    return (
        <section className="information container" id="information">
            <h1 className="information__title">Информация о компании и преимуществах</h1>
            <div className="information__items">
                <div className="information__item">
                    <div className="information__texts">
                        <h2 className="information__item-title">Рациональность</h2>
                        <p className="information__item-subtitle">
                            использования нашего производства определена<br />
                            нашими высокими стандартами качества,<br />
                            квалифицированными специалистами,<br />
                            многолетним опытом на <span>настоящем</span> рынке
                        </p>
                        <p className="information__item-subtitle mobile">
                            использования нашего производства определена нашими высокими
                            стандартами качества, квалифицированными специалистами, многолетним
                            опытом на рынке
                        </p>
                    </div>
                    <img
                        src="/static/images/information/rac.png"
                        alt=""
                        className="information__img"
                    />
                </div>
                <div className="information__item">
                    <div className="information__texts">
                        <h2 className="information__item-title">Надёжность</h2>
                        <p className="information__item-subtitle">
                            всех наших электрических удлинителей,<br />
                            подтверждена, как отзывами наших партнеров,<br />
                            так и документами сертификации,<br />
                            выданные и заверенные специализированными<br />
                            государственными учреждениями
                        </p>
                        <p className="information__item-subtitle mobile">
                            всех наших электрических удлинителей, подтверждена, документами
                            сертификации, заверенные специализированными государственными
                            учреждениями
                        </p>
                    </div>
                    <img
                        src="/static/images/information/nad.png"
                        alt=""
                        className="information__img"
                    />
                </div>
                <div className="information__item">
                    <div className="information__texts">
                        <h2 className="information__item-title">Производительность</h2>
                        <p className="information__item-subtitle">
                            всех наших электрических удлинителей,<br />
                            определена силовыми характеристиками,<br />
                            способными «выдерживать»<br />
                            большинство видов инструментов
                        </p>
                        <p className="information__item-subtitle mobile">
                            всех наших электрических удлинителей, определена силовыми
                            характеристиками,<br />
                            способными «выдерживать» большинство видов инструментов
                        </p>
                    </div>
                    <img
                        src="/static/images/information/pro.png"
                        alt=""
                        className="information__img"
                    />
                </div>
            </div>
        </section>
    )
}