import {Image} from './styles';

interface IIcon {
    src: string;
    alt: string;
}

export const Icon = (props: IIcon) => {
    const {src, alt} = props;
    return <Image src={src} alt={alt} />;
}
