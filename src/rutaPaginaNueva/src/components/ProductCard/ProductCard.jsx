import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TransformIcon from '@mui/icons-material/Transform';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import ShowerIcon from '@mui/icons-material/Shower';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import PropTypes from 'prop-types';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import BannerFinalSecond from '../Banner/BannerFinalSecond';
import BannerSlideSecond from '../Banner/BannerSlideSecond';
import PrCdStyle from "./ProductCardStyle.module.css";

export default function ProductCard({ banner, prod, index, len }) {

    const arr = [

        "https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/ImgPublicaciones%2F60m2.JPG?alt=media&token=9b62065d-a866-456f-8de5-4392b1b8d37e",
        "https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Planos%2F75m2.jpg?alt=media&token=33b7c3ff-6ed1-4664-b366-99689c49aa4b",
        "https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/ImgPublicaciones%2F60m2.JPG?alt=media&token=9b62065d-a866-456f-8de5-4392b1b8d37e",
        "https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Planos%2F75m2.jpg?alt=media&token=33b7c3ff-6ed1-4664-b366-99689c49aa4b"
    ];

    // const slideshow = useRef(null);

    const [estRadio, setEstRadio] = useState(false);

    const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
        ({ theme, checked }) => ({
            '.MuiFormControlLabel-label': checked && {
                color: "#B90000",
            },
        }),
    );

    function MyFormControlLabel(props) {
        const radioGroup = useRadioGroup();

        let checked = false;

        if (radioGroup) {
            checked = radioGroup.value === props.value;
            setEstRadio(radioGroup.value === props.value);
        }

        return <StyledFormControlLabel checked={checked} {...props} />;
    }

    MyFormControlLabel.propTypes = {
        /**
         * The value of the component.
         */
        value: PropTypes.any,
    };

    const openPop = () => {

        document.getElementsByClassName(PrCdStyle.contentPopup)[index]?.classList.toggle(PrCdStyle.maxWidth);

    }

    const desDesliz = (i) => {

        let res = document.getElementsByClassName(PrCdStyle.contentDet).length;

        // -> (((total de div en dom / cantidad total de cards) * posicion de card) + index del div)
        let indEnc = (((res / len) * index) + i);

        const prodDiv = document.getElementsByClassName(PrCdStyle.detProd)[indEnc];

        // prodDiv.style.display === 'none' ? prodDiv.style.display = 'block' : prodDiv.style.display = 'none';

        document.getElementsByClassName(PrCdStyle.contentDet)[indEnc]?.classList.toggle(PrCdStyle.detList);

        // giro de flecha 

        document.getElementsByClassName(PrCdStyle.iconArrow)[indEnc]?.classList.toggle(PrCdStyle.iconGiro);

    }

    let i = 1;

    const next = (e) => {

        const contentSl = document.getElementsByClassName(PrCdStyle.imgSlider);

        const fistElement = contentSl.item(1).children[0];

        const widthImage = contentSl.item(1).children[0].offsetWidth;

        contentSl.item(1).style.transform = (`translateX(-${(widthImage * e)}px)`);

        if (e === contentSl.item(1).children.length) {

            const positionFirst = () => {

                contentSl.item(1).style.trasitions = 'none';

                contentSl.item(1).style.transform = 'translateX(0)';

                contentSl.item(1).addEventListener("transitionend", positionFirst);

            }

            contentSl.item(1).addEventListener("transitionend", positionFirst);

        }

        // console.log(contentSl.item(1).children.length, 'sss')

    }

    // setTimeout(() => {

    //     const contentSl = document.getElementsByClassName(PrCdStyle.imgSlider);

    //     next(i);

    //     i < contentSl.item(1).children.length ? i++ : i = 0;

    // }, 3000)
    // setInterval(() => {

    //     const contentSl = document.getElementsByClassName(PrCdStyle.imgSlider);

    //     next(i);

    //     i < contentSl.item(1).children.length ? i++ : i = 0;

    // }, 3000)

    // console.log(document.getElementsByClassName(PrCdStyle.imgSlider), 'jj')


    return (

        <div className={PrCdStyle.cardProductContent} >

            {/* <img src={prod?.file} alt={prod?.title} /> */}
            <div className={PrCdStyle.OfertaContImg}>
                <img src={prod?.file} alt={prod?.title} />
            </div>

            <div className={PrCdStyle.OfertaCarac} >

                <div>SUP:<TransformIcon />{prod.sup}</div>

                <div>AMB:<NightShelterIcon />{prod.amb}</div>

                <div>BAÑO:<ShowerIcon />{prod.baño}</div>

            </div>

            <h3 className={PrCdStyle.OfertaCardSubtitle}>CASA CONTAINER {prod?.title}</h3>

            <h3 className={PrCdStyle.OfertaCardSubtitle}>¡ENTREGA PROGRAMADA!</h3>

            <div className={PrCdStyle.contentCuot} >

                <h4>CANTIDAD DE CUOTAS</h4>

                <RadioGroup name="use-radio-group" defaultValue="first">

                    <MyFormControlLabel value="first" label="120 Cuotas" control={

                        <Radio sx={{
                            color: "#B90000",
                            '&.Mui-checked': {
                                color: "#B90000",
                            },
                        }}
                        />

                    } />

                    <MyFormControlLabel value="second" label="240 Cuotas" control={

                        <Radio sx={{
                            color: "#B90000",
                            '&.Mui-checked': {
                                color: "#B90000",
                            },
                        }}
                        />

                    } />

                </RadioGroup>


            </div>

            <div className={PrCdStyle.contentPrecios} >

                <p className={PrCdStyle.preText} >Cuotas de</p>

                <p className={PrCdStyle.preNum} >${estRadio ? prod.preCuot120 : prod.preCuot240}</p>

                <p className={PrCdStyle.preText} >Precio de lista</p>

                <p className={PrCdStyle.preNum} >${prod.price}</p>

                <p className={PrCdStyle.preText} >Precio promocion (contado)</p>

                <p className={PrCdStyle.preNum} >${prod.priceDesc}</p>

            </div>

            {/* <p>{e?.description}</p>  */}

            <div className={PrCdStyle.contentBtn} >

                <div className={PrCdStyle.btnVer} onClick={openPop} >VER MÁS</div>

                <div className={PrCdStyle.btnCon} ><Link to="/contactoTest"><p>CONSULTAR</p></Link></div>

            </div>

            <div className={PrCdStyle.contentPopup} >

                <div className={PrCdStyle.closePop} >

                    <div className={PrCdStyle.closePopIcon} ><HighlightOffIcon onClick={openPop} sx={{ color: 'white', fontSize: 30 }} /></div>

                </div>

                <div className={PrCdStyle.containerP} >

                    <div className={PrCdStyle.contentImg} >

                        <div className={PrCdStyle.imgSlider} >

                            <BannerFinalSecond arrLength={arr.length} banner={true} index={index} >

                                {

                                    arr.map((e, i) => <BannerSlideSecond banner={banner} img={e} key={i} />)

                                }

                            </BannerFinalSecond>

                        </div>

                    </div>

                    <div>

                        <ul>

                            <li className={PrCdStyle.contentDet}>

                                <div className={PrCdStyle.detHead} onClick={e => desDesliz(0)}  >

                                    <p>RESUMEN</p>

                                    <div className={PrCdStyle.iconArrow} >

                                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 30 }} />


                                    </div>

                                </div>

                                <div className={PrCdStyle.detProd} >

                                    <ul>

                                        <li>-{prod.amb} Ambientes</li>
                                        <li>-{prod.baño} Baños</li>
                                        <li>- Cocina Comedor</li>
                                        {prod.living && <li>- Living</li>}

                                    </ul>

                                </div>

                            </li>

                            <li className={PrCdStyle.contentDet}>

                                <div className={PrCdStyle.detHead} >

                                    <p onClick={e => desDesliz(1)} >BAÑOS</p>

                                    <div className={PrCdStyle.iconArrow} >

                                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 30 }} />


                                    </div>

                                </div>

                                <div className={PrCdStyle.detProd} >

                                    <ul>

                                        <li>-Vanitory</li>
                                        <li>-Lavamanos</li>
                                        {prod.bidet && <li>-Bidet</li>}
                                        <li>-Inodoro</li>
                                        <li>-Ducha en Box de 0.80 x 0.80 cm y mampara de vidrio</li>
                                        <li>-Griferias Marca (Pazza, Moza o Hidro)</li>

                                    </ul>

                                    <p>*El Baño contará con revestimiento cerámico (a media altura, box de ducha de piso a techo).</p>

                                    {prod.duchaOption && <p>*Opcional: El cliente tendrá la opcion de cambiar el box de ducha por una bañera de 1.50m.</p>}

                                </div>

                            </li>

                            <li className={PrCdStyle.contentDet}>

                                <div className={PrCdStyle.detHead} >

                                    <p onClick={e => desDesliz(2)} >COCINA</p>

                                    <div className={PrCdStyle.iconArrow} >

                                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 30 }} />


                                    </div>

                                </div>

                                <div className={PrCdStyle.detProd} >

                                    <ul>

                                        <li>-01 Bajo mesada de 1.20m hasta 1.60m</li>
                                        <li>-Mesada de granito sintético de 1.20m hasta 1.60m</li>
                                        <li>-Bacha de acero inoxidable</li>

                                    </ul>

                                </div>

                            </li>

                            <li className={PrCdStyle.contentDet}>

                                <div className={PrCdStyle.detHead} >

                                    <p onClick={e => desDesliz(3)} >EQUIPAMIENTO</p>

                                    <div className={PrCdStyle.iconArrow} >

                                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 30 }} />


                                    </div>

                                </div>

                                <div className={PrCdStyle.detProd} >

                                    <ul>

                                        <li>01 Termotanque eléctrico de {prod.termotanque} litros</li>
                                        <li>{prod.aire} Aires acondicionados Split de 2200 F (frio/calor)</li>

                                    </ul>

                                </div>

                            </li>

                            <li className={PrCdStyle.contentDet}>

                                <div className={PrCdStyle.detHead} >

                                    <p onClick={e => desDesliz(4)} >REVESTIMIENTO</p>

                                    <div className={PrCdStyle.iconArrow} >

                                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 30 }} />


                                    </div>

                                </div>

                                <div className={PrCdStyle.detProd} >

                                    <p>Interior: Placa de yeso color blanco (Durlock) o como opción machimbre de PVC color blanco.</p>

                                    <p>Exterior: Esmalte sintético, color a eleccion de línea Emapi o Tersuave, colores estándar a decidir por el cliente.</p>

                                    <p>Aislación térmica y acústica: Lana de vidrio de 50mm.</p>

                                </div>

                            </li>

                            <li className={PrCdStyle.contentDet}>

                                <div className={PrCdStyle.detHead} >

                                    <p onClick={e => desDesliz(5)} >PISOS</p>

                                    <div className={PrCdStyle.iconArrow} >

                                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 30 }} />


                                    </div>

                                </div>

                                <div className={PrCdStyle.detProd} >

                                    <ul>

                                        <li>-Vinílico símil madera (alto tránsito)</li>
                                        <li>-Hidrolaqueado, pisos original del contenedor con dos manos de hidrolaca.</li>
                                        <li>-Flotante simil madera (a cotizar).</li>

                                    </ul>

                                </div>

                            </li>

                            <li className={PrCdStyle.contentDet}>

                                <div className={PrCdStyle.detHead} >

                                    <p onClick={e => desDesliz(6)} >APERTURAS</p>

                                    <div className={PrCdStyle.iconArrow} >

                                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 30 }} />


                                    </div>

                                </div>

                                <div className={PrCdStyle.detProd} >

                                    <ul>

                                        <li>-Ventanas Línea Herrero con rejas como medida de seguridad</li>
                                        {prod.ven150x110 && <li>-02 Ventanas de 2.00 x 2.00 m</li>}
                                        <li>-{prod.ven150x110} Ventanas de 1.50 x 1.10 m con traba interior</li>
                                        <li>-Ventanas de 0.60 x 0.40 m para baño</li>
                                        <li>-Ventanas de 1.00 x 0.40 hasta 1.50 x 0.40 m para cocina</li>
                                        {prod.puerTipo && <li>-01 Puerta de entrada doble chapa o mitad vidrio y mitad aluminio.</li>}

                                    </ul>

                                    <p>Opcional: El Cliente tendra la opción de cambiar la puerta de ingreso por ventana balcon 1.50 x 2.00 m</p>

                                    <p>Opcional: 01 Portón Romano de 1.50 x 2.00 m</p>

                                </div>

                            </li>

                            <li className={PrCdStyle.contentDet}>

                                <div className={PrCdStyle.detHead} >

                                    <p onClick={e => desDesliz(7)} >INSTALACIONES</p>

                                    <div className={PrCdStyle.iconArrow} >

                                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 30 }} />


                                    </div>

                                </div>

                                <div className={PrCdStyle.detProd} >

                                    <p>Instalación Eléctrica:</p>

                                    <ul>

                                        <li>-Instalación reglamentaría por cañería emburidas, con {prod.tomaDistri} tomas distribuidos entre tomacorrientes simples y tomacorrientes dobles.</li>
                                        <li>-Caja para térmicas de luz con 12 módulos</li>
                                        <li>-{prod.llaveEncendido} Llaves de encendido</li>
                                        <li>-{prod.lucesLed} Luces Led en cielorraso de alta calidad y de bajo consumo</li>
                                        <li>-{prod.luzExt} Luces exteriores tipo tortuga de PVC</li>

                                    </ul>

                                    <p>Instalación de Agua:</p>

                                    <ul>

                                        <li>- Fría y Caliente.</li>
                                        <li>- Caños termofusión de 20.</li>
                                        <li>- Desagues Aguaduc de 110, 40, 50 y 60.</li>

                                    </ul>

                                </div>

                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>

    )

}