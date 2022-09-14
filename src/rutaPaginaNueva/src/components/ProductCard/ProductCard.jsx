import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TransformIcon from '@mui/icons-material/Transform';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import ShowerIcon from '@mui/icons-material/Shower';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import PropTypes from 'prop-types';
import PrCdStyle from "./ProductCardStyle.module.css";

export default function ProductCard({ prod }) {

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

            {/* <p>{e?.description}</p> onClick={popUp} */}

            <div className={PrCdStyle.contentBtn} >

        <div className={PrCdStyle.btnVer}  >VER MÁS</div>

        <div className={PrCdStyle.btnCon} ><Link to="/contactoTest"><p>CONSULTAR</p></Link></div>

      </div>

        </div>

    )

}