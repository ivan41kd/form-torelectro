import * as Dialog from '@radix-ui/react-dialog';
import { TProduct } from './product-card.types';

export function ProductCard({ product }: { product: TProduct }) {
    return (
        <Dialog.Root>
            <div className='catalog__card-wrapper'>
                <div className='catalog__card-img-wrapper'>
                    <img className='catalog__card-img' src='./assets/product/product.png' />
                </div>
                <div className='catalog__card-info'>
                    <p className='catalog__card-name'>
                        ${product.title} $
                        {product.grounding == true && product.category === 1 ? '· с заземлением' : ''} $
                        {product.grounding == false && product.category === 1 ? '· без заземления' : ''}{' '}
                    </p>
                    <div className='catalog__card-chars'>
                        <div className='catalog__char'>
                            <p className='catalog__char-name'>
                                сечение кабеля: <br />
                            </p>
                            <p className='catalog__char-value'>
                                ${product.variants.map(item => item.options[0].plugs).join('·')}
                            </p>
                        </div>
                        <div className='catalog__char'>
                            <p className='catalog__char-name'>
                                длина кабеля: <br />
                            </p>
                            <p className='catalog__char-value'>
                                от {product.variants[0].options[0].length} до $
                                {product.variants[0].options[product.variants[0].options.length - 1].length}
                            </p>
                        </div>
                        <div className='catalog__char'>
                            <p className='catalog__char-name'>
                                ${product.category == 1 ? 'защита кабеля:' : 'система заземления:'}
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
                        <Dialog.Overlay />
                        <Dialog.Content>
                            <Dialog.Title></Dialog.Title>
                            <Dialog.Description></Dialog.Description>
                            <Dialog.Close />
                        </Dialog.Content>
                    </Dialog.Portal>
                </div>
            </div>
        </Dialog.Root>
    );
}
