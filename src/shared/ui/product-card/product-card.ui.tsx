import { ProductCardModal } from './product-card.modal';
import * as Dialog from '@radix-ui/react-dialog';
import { TProduct } from './product-card.types';
import { Image } from '../image';

import './product-card.scss';

export function ProductCard({ product }: { product: TProduct }) {
	return (
		<Dialog.Root>
			<div className='catalog__card-wrapper'>
				<div className='catalog__card-img-wrapper'>
					<Image alt='' className='catalog__card-img' src='/static/product/product.png' />
				</div>
				<div className='catalog__card-info'>
					<p className='catalog__card-name'>
						{product.title}
						{product.grounding == true && product.category === 1 ? '· с заземлением' : ''}
						{product.grounding == false && product.category === 1 ? '· без заземления' : ''}{' '}
					</p>
					<div className='catalog__card-chars'>
						<div className='catalog__char'>
							<p className='catalog__char-name'>
								сечение кабеля: <br />
							</p>
							<p className='catalog__char-value'>
								{product.variants.map(item => item.options[0].plugs).join(' · ')}
							</p>
						</div>
						<div className='catalog__char'>
							<p className='catalog__char-name'>
								длина кабеля: <br />
							</p>
							<p className='catalog__char-value'>
								от {product.variants[0].options[0].length} до{' '}
								{product.variants[0].options[product.variants[0].options.length - 1].length}
							</p>
						</div>
						<div className='catalog__char'>
							<p className='catalog__char-name'>
								{product.category == 1 ? 'защита кабеля:' : 'система заземления:'}
							</p>
							<p className='catalog__char-value'>
								{product.category == 1
									? `${product.variants[0].options[0].security}  ·  ${product.socket}`
									: `${product.grounding == true}`
									? 'с заземлением'
									: 'без заземления'}{' '}
							</p>
						</div>
					</div>

					<Dialog.Trigger className='catalog__card-button'>Посмотреть</Dialog.Trigger>
					<Dialog.Portal>
						<Dialog.Overlay className='product__overlay' />
						<Dialog.Content className='product'>
							<Dialog.Close className='product__close' asChild >
								<button aria-label='закрыть'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<path d='M18 6 6 18' />
										<path d='m6 6 12 12' />
									</svg>
								</button>
							</Dialog.Close>
							<ProductCardModal product={product} />
						</Dialog.Content>
					</Dialog.Portal>
				</div>
			</div>
		</Dialog.Root>
	);
}
