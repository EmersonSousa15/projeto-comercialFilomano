import * as S from './styles';
import {MdProductionQuantityLimits} from 'react-icons/md';
import {BsShop} from 'react-icons/bs';
import Logo from '../../assets/Logo.svg';

export const SideBar = () => {
  return (
    <S.Container>
        <S.ContainerLogo>
            <S.Logo src={Logo} alt="logo" />
        </S.ContainerLogo>

        <S.Menu>
            <S.Item>
                <S.Icon htmlFor="products">
                    <MdProductionQuantityLimits/>
                </S.Icon>
                
                <S.Link id="products" href="/produtos">Produtos</S.Link>
            </S.Item>
            <S.Item>
                <S.Icon htmlFor="contact">
                    <BsShop/>
                </S.Icon>

                <S.Link id="contact" href="/contato">Contato</S.Link>
            </S.Item>
        </S.Menu>
    </S.Container>
  )
}
