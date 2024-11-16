import { InputMask, type Track } from '@react-input/mask';

export function FormPhone() {
	return (
		<div className='popup__form-input'>
			<p className='popup__input-name'>номер сотового телефона</p>
			<InputMask
				className='popup__input'
				mask='+7 ___ ___-__-__'
				replacement={{ _: /\d/ }}
				defaultValue='+7'
			/>
		</div>
	);
}
