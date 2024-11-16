import * as Tabs from '@radix-ui/react-tabs';
import { Image } from '../image';
import { TProduct } from './product-card.types';

export function ProductCardModal({ product }: { product: TProduct }) {
	return (
		<Tabs.Root className='product__card-tabs' defaultValue='tab1'>
			<div className='product__card'>
				<div className='product__card-header'>
					<Tabs.List className=' product__card-variants' aria-label='Выбрать вариант'>
						{product.variants.map((item, index) => (
							<Tabs.Trigger
								key={index}
								className='product__card-variant '
								value={`tab${index + 1}`}
							>
								<span className='product__card-variant-value'>{item.variant} Вт</span>
								<span className='product__card-variant-name'>с мощностью</span>
							</Tabs.Trigger>
						))}
					</Tabs.List>

					<div className='product__next-variant'>
						<div className='product__next-variant-info'>
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='product__next-variant-info-icon'
							>
								<path
									d='M10.0576 1.54187C8.45065 1.54187 6.87976 2.01839 5.54361 2.91118C4.20746 3.80397 3.16606 5.07292 2.5511 6.55757C1.93614 8.04222 1.77524 9.67588 2.08874 11.252C2.40225 12.8281 3.17608 14.2758 4.31238 15.4121C5.44868 16.5484 6.89642 17.3222 8.47251 17.6357C10.0486 17.9493 11.6823 17.7884 13.1669 17.1734C14.6516 16.5584 15.9205 15.517 16.8133 14.1809C17.7061 12.8447 18.1826 11.2738 18.1826 9.66687C18.1803 7.51268 17.3236 5.44738 15.8003 3.92414C14.2771 2.4009 12.2118 1.54414 10.0576 1.54187ZM9.43262 5.91687C9.43262 5.75111 9.49847 5.59214 9.61568 5.47493C9.73289 5.35772 9.89186 5.29187 10.0576 5.29187C10.2234 5.29187 10.3824 5.35772 10.4996 5.47493C10.6168 5.59214 10.6826 5.75111 10.6826 5.91687V10.2919C10.6826 10.4576 10.6168 10.6166 10.4996 10.7338C10.3824 10.851 10.2234 10.9169 10.0576 10.9169C9.89186 10.9169 9.73289 10.851 9.61568 10.7338C9.49847 10.6166 9.43262 10.4576 9.43262 10.2919V5.91687ZM10.0576 14.0419C9.8722 14.0419 9.69094 13.9869 9.53677 13.8839C9.3826 13.7809 9.26244 13.6344 9.19148 13.4631C9.12053 13.2918 9.10196 13.1033 9.13813 12.9215C9.17431 12.7396 9.2636 12.5726 9.39471 12.4415C9.52582 12.3103 9.69287 12.2211 9.87472 12.1849C10.0566 12.1487 10.2451 12.1673 10.4164 12.2382C10.5877 12.3092 10.7341 12.4294 10.8371 12.5835C10.9401 12.7377 10.9951 12.9189 10.9951 13.1044C10.9951 13.353 10.8963 13.5915 10.7205 13.7673C10.5447 13.9431 10.3063 14.0419 10.0576 14.0419Z'
									fill='white'
								/>
							</svg>
							<div className='product__next-variant-info-texts'>
								<p className='product__next-variant-info-text'>
									следующая категория электрических удлинителей
								</p>
								<p className='product__next-variant-info-text'>нажмите, чтобы перейти</p>
							</div>
						</div>
						<svg
							width='30'
							height='30'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='product__next-variant-icon'
						>
							<path
								d='M15 2.8125C12.5895 2.8125 10.2332 3.52728 8.22899 4.86646C6.22477 6.20564 4.66267 8.10907 3.74022 10.336C2.81778 12.563 2.57643 15.0135 3.04668 17.3777C3.51694 19.7418 4.67769 21.9134 6.38214 23.6179C8.08659 25.3223 10.2582 26.4831 12.6223 26.9533C14.9865 27.4236 17.437 27.1822 19.664 26.2598C21.8909 25.3373 23.7944 23.7752 25.1335 21.771C26.4727 19.7668 27.1875 17.4105 27.1875 15C27.1841 11.7687 25.899 8.67076 23.6141 6.3859C21.3292 4.10104 18.2313 2.81591 15 2.8125ZM18.4758 15.6633L13.7883 20.3508C13.7012 20.4379 13.5978 20.507 13.484 20.5541C13.3702 20.6013 13.2482 20.6255 13.125 20.6255C13.0018 20.6255 12.8798 20.6013 12.766 20.5541C12.6522 20.507 12.5488 20.4379 12.4617 20.3508C12.3746 20.2637 12.3055 20.1603 12.2584 20.0465C12.2112 19.9327 12.187 19.8107 12.187 19.6875C12.187 19.5643 12.2112 19.4423 12.2584 19.3285C12.3055 19.2147 12.3746 19.1113 12.4617 19.0242L16.4871 15L12.4617 10.9758C12.2858 10.7999 12.187 10.5613 12.187 10.3125C12.187 10.0637 12.2858 9.82513 12.4617 9.64922C12.6376 9.4733 12.8762 9.37448 13.125 9.37448C13.3738 9.37448 13.6124 9.4733 13.7883 9.64922L18.4758 14.3367C18.563 14.4238 18.6321 14.5272 18.6793 14.641C18.7265 14.7548 18.7507 14.8768 18.7507 15C18.7507 15.1232 18.7265 15.2452 18.6793 15.359C18.6321 15.4728 18.563 15.5762 18.4758 15.6633Z'
								fill='#FF3D00'
							/>
						</svg>
					</div>
				</div>
				<div className='product__card-wrapper'>
					<div className='product__card-img-wrapper'>
						<Image
							alt='Image card'
							className='product__card-img'
							src='../../../../public/static/images/product/product.png'
						/>
						<div className='product__img-stickers'>
							<div className='product__img-stickers-items'>
								<div className='product__img-sticker'></div>
							</div>
						</div>
					</div>
					<div className='product__card-info'>
						<div className='product__card-info-wrapper'>
							<div className='product__card-info-texts'>
								<div className='product__card-info-description'>
									<span className='product__card-title'>название товара</span>
									<h2 className='product__name'>
										{product.category === 1
											? product.title
											: product.category === 2 && product.fulltitle
											? product.fulltitle
											: product.title}

										{product.category === 1 && product.grounding && window.innerWidth > 530
											? '· с заземлением'
											: ''}

										{product.category === 1 && !product.grounding && window.innerWidth > 530
											? '· без заземления'
											: ''}
									</h2>
								</div>
								<div className='product__card-info-description'>
									<span className='product__card-title'>краткое описание категории товара</span>
									<h2
										className='product__description'
										dangerouslySetInnerHTML={{ __html: product.description }}
									/>
								</div>

								{product.isProfessional && (
									<div className='product__sticker'>выбор настоящих профессионалов</div>
								)}

								{product.isSpec && (
									<div className='product__sticker'>выбор сильных специалистов</div>
								)}
							</div>
							<button className='product__card-button'>Бесплатная консультация</button>
							{product.variants.map((item, index) => (
								<Tabs.Content className='TabsContent' value={`tab${index + 1}`}>
									<div className='product__card-options'>
										{item.options.map(variant => (
											<>
												<div className='product__options'>
													<div className='product__option'>{variant.article}</div>
													<div className='product__option'>{variant.plugs}</div>
													<div className='product__option'>{variant.length}</div>
													<div className='product__option'>{variant.security}</div>
													<div className='product__option'>{variant.power}</div>
													<div className='product__option'>{variant.socket}</div>
													<div className='product__option'>
														{variant.grounding == true ? 'с заземлением' : 'без заземления'}
													</div>
													<div className='product__add'>
														<svg
															width='15'
															height='15'
															viewBox='0 0 15 15'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
															className='product__add-icon'
														>
															<path
																d='M14.8692 2.97677C14.817 2.91437 14.7518 2.86418 14.6782 2.82975C14.6045 2.79532 14.5242 2.77747 14.4428 2.77749H3.24131L2.81913 0.456202C2.79588 0.328207 2.72844 0.212433 2.62858 0.129064C2.52871 0.0456944 2.40275 1.88016e-05 2.27266 0H0.555494C0.408168 0 0.266876 0.0585255 0.1627 0.162701C0.0585251 0.266878 0 0.408171 0 0.555498C0 0.702825 0.0585251 0.844118 0.1627 0.948294C0.266876 1.05247 0.408168 1.111 0.555494 1.111H1.80536L3.58016 10.8523C3.63244 11.1412 3.76011 11.4112 3.95026 11.6349C3.68782 11.88 3.4984 12.193 3.403 12.5393C3.3076 12.8855 3.30994 13.2513 3.40978 13.5963C3.50962 13.9412 3.70304 14.2518 3.96861 14.4935C4.23417 14.7353 4.56149 14.8987 4.91429 14.9658C5.26708 15.0329 5.63155 15.0009 5.96729 14.8735C6.30303 14.746 6.59691 14.5281 6.81636 14.2438C7.0358 13.9596 7.17223 13.6201 7.21051 13.263C7.2488 12.906 7.18744 12.5453 7.03325 12.2209H10.1871C10.0628 12.4811 9.99848 12.7659 9.99889 13.0542C9.99889 13.4387 10.1129 13.8146 10.3266 14.1344C10.5402 14.4541 10.8438 14.7033 11.1991 14.8504C11.5544 14.9976 11.9453 15.0361 12.3224 14.9611C12.6996 14.8861 13.046 14.7009 13.3179 14.429C13.5898 14.1571 13.775 13.8106 13.85 13.4335C13.925 13.0564 13.8865 12.6654 13.7394 12.3102C13.5922 11.9549 13.343 11.6513 13.0233 11.4376C12.7035 11.224 12.3277 11.11 11.9431 11.11H5.21956C5.08947 11.1099 4.96351 11.0643 4.86365 10.9809C4.76378 10.8975 4.69635 10.7817 4.67309 10.6538L4.45298 9.44346H12.5076C12.8979 9.4434 13.2758 9.30638 13.5754 9.05627C13.875 8.80616 14.0773 8.45884 14.147 8.07485L14.9914 3.43228C15.0057 3.35204 15.0021 3.26964 14.981 3.19091C14.9599 3.11219 14.9217 3.03908 14.8692 2.97677ZM6.11043 13.0542C6.11043 13.219 6.06156 13.3801 5.97001 13.5171C5.87845 13.6541 5.74831 13.7609 5.59606 13.824C5.4438 13.8871 5.27627 13.9036 5.11463 13.8714C4.953 13.8393 4.80453 13.7599 4.688 13.6434C4.57147 13.5269 4.49211 13.3784 4.45996 13.2168C4.42781 13.0551 4.44431 12.8876 4.50738 12.7353C4.57044 12.5831 4.67724 12.4529 4.81427 12.3614C4.95129 12.2698 5.11239 12.2209 5.27719 12.2209C5.49818 12.2209 5.71012 12.3087 5.86638 12.465C6.02264 12.6213 6.11043 12.8332 6.11043 13.0542ZM12.7764 13.0542C12.7764 13.219 12.7275 13.3801 12.6359 13.5171C12.5444 13.6541 12.4142 13.7609 12.262 13.824C12.1097 13.8871 11.9422 13.9036 11.7806 13.8714C11.6189 13.8393 11.4705 13.7599 11.3539 13.6434C11.2374 13.5269 11.158 13.3784 11.1259 13.2168C11.0937 13.0551 11.1102 12.8876 11.1733 12.7353C11.2364 12.5831 11.3432 12.4529 11.4802 12.3614C11.6172 12.2698 11.7783 12.2209 11.9431 12.2209C12.1641 12.2209 12.376 12.3087 12.5323 12.465C12.6886 12.6213 12.7764 12.8332 12.7764 13.0542Z'
																fill='white'
															/>
														</svg>
													</div>
												</div>
											</>
										))}
									</div>
								</Tabs.Content>
							))}
						</div>
						<p className='product__disclaimer'>
							вся информация о товарах и об услугах, носит исключительно информационный характер
						</p>
					</div>
				</div>
			</div>
		</Tabs.Root>
	);
}
