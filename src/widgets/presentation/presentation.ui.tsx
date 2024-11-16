import './presentation.scss'

export function Prtesentation() {
    return (
        <section className="presentation" id="presentation">
            <div className="presentation__wrapper">
                <div className="presentation__texts">
                    <p className="presentation__text">
                        Если вы занимаетесь <span>продажами</span>, или
                        <span>производственными проектами</span>, или, просто хотите производить
                        <br />под своим собственным брендом —
                        <span>смело скачивайте презентацию</span>
                    </p>
                    <button className="presentation__button">Подробная презентация</button>
                    <p className="presentation__disclaimer">
                        подробная презентация предоставляется исключительно на основании запроса
                    </p>
                </div>
                <img
                    src="/static/images/presentation/laptop_2.png"
                    alt=""
                    className="presentation__img"
                />
            </div>
        </section>
    )
}