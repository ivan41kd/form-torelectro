import './contacts.scss';
export function ContactsModal() {
	window.scrollTo(0, 0);
	return (
		<div className='contacts__wrapper'>
			<h2 className='contacts__title'>Контактная информация</h2>
			<div className='contacts__info-items'>
				<div style={{ position: 'relative', overflow: 'hidden' }}>
					<a
						href='https://yandex.ru/maps/1/moscow-and-moscow-oblast/?utm_medium=mapframe&utm_source=maps'
						style={{
							color: '#eee',
							fontSize: '12px',
							position: 'absolute',
							top: '0px',
						}}
					>
						Москва и Московская область
					</a>
					<a
						href='https://yandex.ru/maps/1/moscow-and-moscow-oblast/house/derevnya_torbeyevo_48/Z0EYdgJlS0wDQFtvfXp4c3phYw==/?ll=38.055295%2C55.692628&utm_medium=mapframe&utm_source=maps&z=17'
						style={{
							color: '#eee',
							fontSize: '12px',
							position: 'absolute',
							top: '14px',
						}}
					>
						Деревня Торбеево, 48 на карте Москвы и Московской области — Яндекс Карты
					</a>
					<iframe
						src='https://yandex.ru/map-widget/v1/?ll=38.055295%2C55.692628&mode=whatshere&whatshere%5Bpoint%5D=38.055294%2C55.692627&whatshere%5Bzoom%5D=17&z=17'
						width='800'
						height='470'
						frameBorder='0'
						allowFullScreen={true}
						style={{ position: 'relative' }}
					></iframe>
				</div>
				<div className='contacts__info-cards'>
					<div className='contacts__info-card'>
						<p className='contacts__info-text'>+7 495 198 62 55</p>
						<p className='contacts__info-text'>+7 916 083 39 30</p>
						<p className='contacts__info-text'>tor@torelektro.ru</p>
					</div>
					<div className='contacts__info-card'>
						<div className='contacts__info'>
							<p className='contacts__info-text'>ООО «ТОРЭЛЕКТРО»</p>
						</div>
						<div className='contacts__info'>
							<p className='contacts__info-address'>
								140016, Россия,
								<br />
								Московская область,
								<br />
								Люберецкий район, Торбеево, 48
							</p>
						</div>
						<div className='contacts__info-legals'>
							<div className='contacts__info-legal'>
								<p className='contacts__info-legal-text'>1245000026600</p>
								<p className='contacts__info-legal-text'>5027326376</p>
								<p className='contacts__info-legal-text'>502701001</p>
								<p className='contacts__info-legal-text'>75706083</p>
								<p className='contacts__info-legal-text'>46448000000</p>
							</div>
							<div className='contacts__info-legal'>
								<p className='contacts__info-legal-name'>ОГРН</p>
								<p className='contacts__info-legal-name'>ИНН</p>
								<p className='contacts__info-legal-name'>КПП</p>

								<p className='contacts__info-legal-name'>ОКПО</p>
								<p className='contacts__info-legal-name'>ОКАТО</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
