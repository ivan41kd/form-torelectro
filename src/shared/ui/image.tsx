import { useCallback, useEffect, useRef, useState } from 'react';
import { ImgHTMLAttributes } from 'react';

export interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
}

export interface StaticRequire {
    default: StaticImageData;
}

export type StaticImport = StaticRequire | StaticImageData;

export type ImageLoaderProps = {
    src: string;
    width: number;
    quality?: number;
};

export type ImageLoader = (p: ImageLoaderProps) => string;

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const VALID_LOADING_VALUES: readonly ['lazy', 'eager', undefined];
export type OnLoadingComplete = (img: HTMLImageElement) => void;
export type PlaceholderValue = 'blur' | 'empty' | `data:image/${string}`;
type LoadingValue = (typeof VALID_LOADING_VALUES)[number];

export type NextImageProps = Omit<
    React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    'src' | 'srcSet' | 'ref' | 'alt' | 'width' | 'height' | 'loading' | 'onError'
> & {
    src: string | StaticImport;
    alt: string;
    width?: number | `${number}` | undefined;
    height?: number | `${number}` | undefined;
    fill?: boolean | undefined;
    loader?: ImageLoader | undefined;
    quality?: number | `${number}` | undefined;
    priority?: boolean | undefined;
    loading?: LoadingValue;
    placeholder?: PlaceholderValue | undefined;
    blurDataURL?: string | undefined;
    unoptimized?: boolean | undefined;
    overrideSrc?: string | undefined;
    onLoadingComplete?: OnLoadingComplete | undefined;
    layout?: string | undefined;
    objectFit?: string | undefined;
    objectPosition?: string | undefined;
    lazyBoundary?: string | undefined;
    lazyRoot?: string | undefined;
};

type CustomImgAttributes = Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'srcSet' | 'ref' | 'alt' | 'width' | 'height' | 'loading' | 'onError'
>;

export interface IImageProps extends CustomImgAttributes, NextImageProps {
    errorPlaceholder?: string;
    apiConfig?: RequestInit;
    component?: React.ComponentType<NextImageProps>;
    onError?: (error: Response, setImage: (newSrc: string) => void) => void;
    cnLoader?: string;
}

function Image(props: IImageProps) {
    const { onError, src, apiConfig, component, cnLoader, errorPlaceholder, ...restProps } = props;

    const imageRef = useRef<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const loadImage = useCallback(async () => {
        try {
            const response = await fetch(src as string, { ...apiConfig });
            if (!response.ok) {
                setIsLoading(false);
                throw response;
            }

            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);

            imageRef.current = blobUrl;
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            imageRef.current = errorPlaceholder || '';
            if (onError) {
                onError(err as Response, (newSrc: string) => {
                    imageRef.current = newSrc;
                });
            } else {
                // eslint-disable-next-line no-console
                console.error('Image failed to load:', err);
            }
        }
    }, [src, apiConfig, errorPlaceholder, onError]);

    useEffect(() => {
        if ((typeof src === 'string' && !src.length) || src === null) {
            imageRef.current = errorPlaceholder || '';
            return;
        }

        if (imageRef.current !== src) {
            loadImage();
        }

        return () => { };
    }, [src, errorPlaceholder, loadImage]);

    if (isLoading) {
        return <div className="loader" />;
    }
    if (component) {
        const Component = component;
        return <Component src={imageRef.current || src} {...restProps} />;
    }

    return <img src={imageRef.current} {...restProps} />;
};

export { Image };
